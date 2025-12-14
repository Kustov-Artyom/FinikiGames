import React, { useEffect, useMemo, useState } from 'react'
import { Typography } from 'antd'
import './LocationMap.css'

export type LocationCard = {
  id: string
  image: string
  locationTitle: string
  locationSubtitle: string
  description: string
  size: 'main' | 'side'
}

type Props = {
  cards: LocationCard[] // теперь ОБЯЗАТЕЛЬНО снаружи
  title?: string // заголовок блока (оставляем как есть)
}

export default function LocationMap({ title = 'КАРТА', cards }: Props) {
  const data = useMemo(() => (Array.isArray(cards) ? cards : []), [cards])

  const [selectedId, setSelectedId] = useState<string>(data[0]?.id ?? '')

  // если cards пришли/сменились — выберем первую
  useEffect(() => {
    setSelectedId(data[0]?.id ?? '')
  }, [data])

  const selected = useMemo(() => {
    if (!data.length) return undefined
    return data.find((x) => x.id === selectedId) ?? data[0]
  }, [data, selectedId])

  return (
    <section className="location-map-wrap">
      <div className="location-map-inner">
        <div className="location-map-left">
          <Typography.Title level={1} className="location-map-title">
            {title}
          </Typography.Title>

          <div className="location-map-sub">
            <div className="location-map-subline">{selected?.locationSubtitle ?? ''}</div>
          </div>

          <Typography.Paragraph className="location-map-desc">
            {(selected?.description ?? '').split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography.Paragraph>
        </div>

        <div className="location-map-right" role="list">
          {data.length ? (
            data.map((card) => {
              const isSelected = card.id === selectedId
              const cls =
                card.size === 'main'
                  ? 'location-map-card location-map-card--main'
                  : 'location-map-card location-map-card--side'

              return (
                <button
                  key={card.id}
                  type="button"
                  role="listitem"
                  className={`${cls} ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => setSelectedId(card.id)}
                  aria-label={`Выбрать локацию: ${card.locationTitle}`}
                >
                  <img className="location-map-img" src={card.image} alt={card.locationTitle} />
                </button>
              )
            })
          ) : (
            <div style={{ opacity: 0.8 }}>Нет локаций для отображения</div>
          )}
        </div>
      </div>
    </section>
  )
}
