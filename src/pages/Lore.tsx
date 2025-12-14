import React from 'react'
import HeroTypeSwitcher, { type HeroTab } from '../components/ui/HeroTypeSwitcher/HeroTypeSwitcher'
import WorldHistory, { type WorldHistoryCard } from '../components/ui/WorldHistory/WorldHistory'
import Factions, { type Faction } from '../components/ui/Factions/Factions'
import ItemsCarousel, { type GameItem } from '../components/ui/ItemCarousel/ItemCarousel'
import LocationMap, { type LocationCard } from '../components/ui/LocationMap/LocationMap'

import './Lore.css'

type LoreProps = {
  heroTabs: HeroTab[]
  worldHistoryCards: WorldHistoryCard[]
  locationCards: LocationCard[]
  items: GameItem[]
  factions: Faction[]
}

export default function Lore(props: LoreProps) {
  const { heroTabs, worldHistoryCards, locationCards, items, factions } = props

  return (
    <div className="lore-page">
      <HeroTypeSwitcher tabs={heroTabs} />
      <WorldHistory cards={worldHistoryCards} />
      <LocationMap cards={locationCards} />
      <ItemsCarousel items={items} />
      <Factions factions={factions} />
    </div>
  )
}
