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
  const safeItems = Array.isArray(items) ? items : []

  if (safeItems.length === 0) {
    return (
      <div className={`promo-list ${className ?? ''}`}>
        <Empty description="Промокодов нет" />
      </div>
    )
  }

  return (
    <div className={`promo-list ${className ?? ''}`}>
      <Space direction="vertical" size={16} className="promo-list__stack">
        {safeItems.map((it) => (
          <PromoCodeBanner key={it.id} date={it.date} time={it.time} />
        ))}
      </Space>
    </div>
  )
}
