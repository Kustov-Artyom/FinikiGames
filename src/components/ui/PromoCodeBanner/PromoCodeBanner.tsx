import React from 'react'
import { Button, notification } from 'antd'
import './PromoCodeBanner.css'

type Props = {
  /** Дата, например: "00.00.0000" */
  date: string
  /** Время, например: "00:00" */
  time: string
  className?: string
}

export default function PromoCodeBanner({ date, time, className }: Props) {
  const handleClick = () => {
    notification.success({
      message: 'Код скопирован',
      description: 'Промокод скопирован в буфер обмена.',
      placement: 'top',
      duration: 2,
    })
  }

  return (
    <div className={`promo-banner ${className ?? ''}`}>
      <div className="promo-banner__inner">
        <div className="promo-banner__title">ПРОМОКОД</div>

        <div className="promo-banner__meta">
          <span className="promo-banner__metaLabel">Действует до:</span>
          <span className="promo-banner__metaValue">
            {date} {time}
          </span>
        </div>

        <Button className="promo-banner__btn" type="default" onClick={handleClick}>
          Получить код
        </Button>
      </div>
    </div>
  )
}
