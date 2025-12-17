import React from 'react'
import { Space, Empty } from 'antd'
import PromoCodeBanner from '../PromoCodeBanner/PromoCodeBanner';
import './PromoCodeList.css'

export type PromoCodeItem = {
  id: string
  date: string // "00.00.0000"
  time: string // "00:00"
}

type Props = {
  items: PromoCodeItem[]
  className?: string
}

export default function PromoCodeList({ items, className }: Props) {
  const safeItems = Array.isArray(items) ? items : [];

 

  return (
    <div className={`promo-list ${className ?? ''}`}>
      <h2 className="promo-list__title">ПРОМОКОДЫ</h2>
      {safeItems.length === 0 ? (
        <Empty description="Промокодов нет" />
      ) : (
        <Space direction="vertical" size={16} className="promo-list__stack">
          {safeItems.map((it) => (
            <PromoCodeBanner key={it.id} date={it.date} time={it.time} />
          ))}
        </Space>
      )}
    </div>
  )
}
