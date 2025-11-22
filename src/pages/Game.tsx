import { useEffect, useRef, useState } from 'react'
import { Button, Descriptions, notification, Space, Typography, Segmented } from 'antd'
import PageHeader from '../components/ui/PageHeader'
import { useGame } from '../hooks/useGame'

// PixiJS v8
import { Application, Sprite, Texture, Container, Assets } from 'pixi.js'
import crystalUrl from '../assets/crystal.svg' // можно оставить без ?url — см. комментарий ниже

type Mode = 'easy' | 'normal' | 'hard'

export default function Game() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<Application | null>(null)
  const [mode, setMode] = useState<Mode>('normal')

  // Количество кристаллов — от режима
  const total = mode === 'easy' ? 10 : mode === 'hard' ? 20 : 15
  const { collected, remaining, award, onCrystalPick, reset, thresholds } = useGame(total)

  // Награды
  useEffect(() => {
    if (award === 'bronze') {
      notification.success({ message: 'Бронзовая награда', description: 'Собрано 5 кристаллов!' })
    } else if (award === 'silver') {
      notification.success({ message: 'Серебряная награда', description: 'Собрано 10 кристаллов!' })
    } else if (award === 'gold') {
      notification.success({ message: 'Золотая награда', description: 'Собрано все кристаллы!' })
    }
  }, [award])

  /**
   * Pixi инициализация с защитой от StrictMode (двойной mount/unmount):
   * - ждём app.init()
   * - ждём Texture через Assets.load() (корректно работает и с data: и с file URL)
   */
  useEffect(() => {
    const mount = wrapRef.current
    if (!mount) return

    let disposed = false

    // Сносим предыдущий инстанс, если был
    if (appRef.current) {
      try {
        appRef.current.destroy(true)
      } catch {
        // no-op
      } finally {
        appRef.current = null
      }
    }

    const app = new Application()
    appRef.current = app

    ;(async () => {
      const width = Math.min(mount.clientWidth, 900)
      const height = 520

      try {
        await app.init({ width, height, background: '#0b1426', antialias: true })
      } catch (e) {
        appRef.current = null
        console.error('Pixi Application.init() failed:', e)
        return
      }

      if (disposed) {
        try {
          app.destroy(true)
        } catch {
          // no-op
        } finally {
          if (appRef.current === app) appRef.current = null
        }
        return
      }

      // Монтируем canvas
      mount.appendChild(app.canvas as unknown as Node)

      // --- ГРУЗИМ ТЕКСТУРУ ЧЕРЕЗ Assets.load ---
      // Это избавляет от ворнинга "Assets ... was not found in the Cache"
      // и корректно работает с data: URL, который Vite может инлайнить.
      let tex: Texture
      try {
        tex = (await Assets.load(crystalUrl)) as Texture
      } catch (e) {
        console.error('Failed to load crystal texture via Assets.load:', e)
        return
      }

      if (disposed) {
        try {
          app.destroy(true)
        } catch {
          // no-op
        } finally {
          if (appRef.current === app) appRef.current = null
        }
        return
      }

      // Контейнер под кристаллы
      const layer = new Container()
      app.stage.addChild(layer)

      const padding = 32
      const rnd = (min: number, max: number) => Math.random() * (max - min) + min

      for (let i = 0; i < total; i++) {
        const spr = new Sprite({ texture: tex })
        spr.anchor.set(0.5)
        spr.scale.set(0.9 + Math.random() * 0.4)
        spr.x = rnd(padding, width - padding)
        spr.y = rnd(padding, height - padding)
        spr.eventMode = 'static'
        spr.cursor = 'pointer'
        spr.on('pointertap', () => {
          if (spr.destroyed) return
          layer.removeChild(spr)
          spr.destroy()
          onCrystalPick()
        })
        layer.addChild(spr)
      }
    })()

    return () => {
      disposed = true
      const current = appRef.current
      if (current) {
        try {
          current.destroy(true)
        } catch {
          // no-op
        } finally {
          if (appRef.current === current) appRef.current = null
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  const handleRestart = () => {
    reset()
    // Для полного визуального рестарта можно сменить режим туда-сюда.
  }

  return (
    <>
      <PageHeader title="Игра: Сбор кристаллов" subtitle="Кликайте по кристаллам, чтобы собрать их все." />

      <Space style={{ marginBottom: 16 }} wrap>
        <Segmented<Mode>
          options={[
            { label: 'Легко (10)', value: 'easy' },
            { label: 'Норма (15)', value: 'normal' },
            { label: 'Сложно (20)', value: 'hard' }
          ]}
          value={mode}
          onChange={(val) => {
            reset()
            setMode(val)
          }}
        />
        <Button onClick={handleRestart}>Начать заново</Button>
      </Space>

      <div className="pixi-wrap" ref={wrapRef} />

      <Descriptions bordered size="small" column={{ xs: 1, sm: 3 }} style={{ marginTop: 16, background: '#fff' }}>
        <Descriptions.Item label="Собрано">{collected}</Descriptions.Item>
        <Descriptions.Item label="Осталось">{remaining}</Descriptions.Item>
        <Descriptions.Item label="Цели">
          {thresholds.bronze}/{thresholds.silver}/{thresholds.gold}
        </Descriptions.Item>
        <Descriptions.Item label="Текущая награда" span={3}>
          <Typography.Text strong>
            {award === 'none'
              ? '—'
              : award === 'bronze'
              ? 'Бронзовая'
              : award === 'silver'
              ? 'Серебряная'
              : 'Золотая'}
          </Typography.Text>
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}
