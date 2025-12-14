import React, { useMemo } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import './HeroTypeSwitcher.css'
import HeroInfo from '../HeroInfo/HeroInfo'

export type HeroInfoData = {
  image: string
  name: string
  typeImage: string
  rarity: string
  description: string
}

export type HeroTab = {
  key: string
  label: React.ReactNode
  hero: HeroInfoData
}

type Props = {
  tabs: HeroTab[]
  defaultActiveKey?: string
}

export default function HeroTypeSwitcher({ tabs, defaultActiveKey }: Props) {
  const items: TabsProps['items'] = useMemo(
    () =>
      (Array.isArray(tabs) ? tabs : []).map((t) => ({
        key: t.key,
        label: t.label,
        children: (
          <HeroInfo
            image={t.hero.image}
            name={t.hero.name}
            typeImage={t.hero.typeImage}
            rarity={t.hero.rarity}
            description={t.hero.description}
          />
        ),
      })),
    [tabs],
  )

  return (
    <div className="page-wrapper">
      <Tabs
        defaultActiveKey={defaultActiveKey ?? (items?.[0]?.key as string) ?? '1'}
        centered
        items={items}
      />
    </div>
  )
}
