import React from 'react'
import { Button, notification } from 'antd'
import './PromoCodeBanner.css'

type Props = {
  date: string // "00.00.0000"
  time: string // "00:00"
  className?: string
}

export default function PromoCodeBanner({ date, time }: Props) {
  const handleClick = () => {
    notification.success({
      message: 'Код скопирован',
      description: 'Промокод скопирован в буфер обмена.',
      placement: 'top',
      duration: 2
    })
  }

  return (
    <div className="promo-banner__inner">
      <div className="promo-banner__content">
        <div className="promo-banner__title">ПРОМОКОД</div>
        <div className="promo-banner__meta">
          <span className="promo-banner__metaLabel">Действует до:</span>
          <span className="promo-banner__metaValue">
            {date} {time}
          </span>
        </div>
      </div>

      <Button className="promo-banner__btn" type="default" onClick={handleClick}>
        Получить код
      </Button>
    </div>
  )
}
