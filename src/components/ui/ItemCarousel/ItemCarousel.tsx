import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Carousel, Typography, Button, Grid } from 'antd'
import type { CarouselRef } from 'antd/es/carousel'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './ItemCarousel.css'
import fallbackImg from '../../../assets/photo6.svg'

export type GameItem = {
  id: string
  title: string
  image: string
}

type Props = {
  items: GameItem[]
  className?: string
  heading?: string // заголовок блока (оставляем как есть / можно переопределять)
}

type ResolvedItem = GameItem & {
  resolvedSrc: string
  isLoaded: boolean
}

function preloadImage(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = () => reject(new Error(`Failed to load: ${src}`))
    img.src = src
  })
}

export default function ItemsCarousel({ items, className, heading = 'ПРЕДМЕТЫ' }: Props) {
  const carouselRef = useRef<CarouselRef | null>(null)
  const [active, setActive] = useState(0)

  const { useBreakpoint } = Grid
  const screens = useBreakpoint()

  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items])

  /**
   * Ключевой фикс "исчезающих" картинок:
   * Родитель мог пересоздавать массив items на каждый рендер, из-за чего useEffect
   * срабатывал снова и снова и сбрасывал resolvedItems на fallback.
   *
   * Поэтому зависимость эффекта делаем НЕ от ссылки на массив,
   * а от сигнатуры содержимого.
   */
  const itemsSig = useMemo(() => {
    // достаточно id+image+title; порядок учитываем
    return safeItems.map((x) => `${x.id}::${x.image}::${x.title}`).join('||')
  }, [safeItems])

  const [resolvedItems, setResolvedItems] = useState<ResolvedItem[]>(() =>
    safeItems.map((it) => ({
      ...it,
      resolvedSrc: fallbackImg,
      isLoaded: false,
    })),
  )

  useEffect(() => {
    let cancelled = false

    const base: ResolvedItem[] = safeItems.map((it) => ({
      ...it,
      resolvedSrc: fallbackImg,
      isLoaded: false,
    }))

    setResolvedItems(base)

    // если активный индекс “вылез” — аккуратно сбросим
    setActive((prev) => {
      if (!base.length) return 0
      return Math.min(prev, base.length - 1)
    })

    ;(async () => {
      const next = await Promise.all(
        safeItems.map(async (it) => {
          try {
            const okSrc = await preloadImage(it.image)
            return { ...it, resolvedSrc: okSrc, isLoaded: true } as ResolvedItem
          } catch (e) {
            console.error('[ItemsCarousel] preload failed:', it.image, e)
            return { ...it, resolvedSrc: fallbackImg, isLoaded: true } as ResolvedItem
          }
        }),
      )

      if (!cancelled) {
        setResolvedItems(next)
        setActive((prev) => (next.length ? Math.min(prev, next.length - 1) : 0))
      }
    })()

    return () => {
      cancelled = true
    }
  }, [itemsSig]) // <-- ВАЖНО: не safeItems

  const canRender = resolvedItems.length > 0
  const current = resolvedItems[active]

  const frameSize = useMemo(() => {
    if (!screens.sm) return { w: 230, h: 300 }
    if (!screens.md) return { w: 280, h: 360 }
    if (!screens.lg) return { w: 320, h: 410 }
    return { w: 360, h: 460 }
  }, [screens.sm, screens.md, screens.lg])

  return (
    <section className={`items-carousel-wrap ${className ?? ''}`}>
      <div className="items-carousel-inner">
        <Typography.Title level={1} className="items-carousel-title">
          {heading}
        </Typography.Title>

        <div className="items-carousel-stage">
          <Button
            type="text"
            aria-label="Предыдущий предмет"
            className="items-carousel-arrow items-carousel-arrow-left"
            onClick={() => carouselRef.current?.prev()}
          >
            <span className="items-carousel-arrow-circle">
              <LeftOutlined />
            </span>
          </Button>

          <div
            className="items-carousel-center"
            style={
              {
                ['--carousel-h' as any]: `${frameSize.h}px`,
              } as React.CSSProperties
            }
          >
            {canRender ? (
              <>
                <div className="items-carousel-shell">
                  <Carousel
                    ref={carouselRef}
                    dots={false}
                    draggable
                    speed={380}
                    adaptiveHeight={false}
                    className="items-carousel"
                    afterChange={(idx) => setActive(idx)}
                  >
                    {resolvedItems.map((it) => (
                      <div key={it.id} className="items-carousel-slide">
                        <div
                          className={`items-carousel-frame ${it.isLoaded ? 'is-loaded' : 'is-loading'}`}
                          style={
                            {
                              ['--frame-w' as any]: `${frameSize.w}px`,
                              ['--frame-h' as any]: `${frameSize.h}px`,
                            } as React.CSSProperties
                          }
                        >
                          <img
                            className="items-carousel-img"
                            src={it.resolvedSrc}
                            alt={it.title}
                            loading="eager"
                            decoding="async"
                            draggable={false}
                          />
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>

                <div className="items-carousel-caption" aria-live="polite">
                  {current?.title ?? ''}
                </div>
              </>
            ) : (
              <div className="items-carousel-empty">Нет предметов для отображения</div>
            )}
          </div>

          <Button
            type="text"
            aria-label="Следующий предмет"
            className="items-carousel-arrow items-carousel-arrow-right"
            onClick={() => carouselRef.current?.next()}
          >
            <span className="items-carousel-arrow-circle">
              <RightOutlined />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
