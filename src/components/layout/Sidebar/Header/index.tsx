'use client'

import { Typo } from 'components'
import {
  type DashboardPageId,
  HEADER_LABELS,
  type HeaderTabKey,
  NAVIGATION_ITEMS,
} from 'features/dashboard/navigation'
import { useState } from 'react'

import Avatar from '../Avatar'
import * as S from './header.styled'

interface HeaderProps {
  onChangeActiveId?: (id: DashboardPageId) => void
  favoriteIds?: DashboardPageId[]
  recentIds?: DashboardPageId[]
}

export default function Header({
  onChangeActiveId,
  favoriteIds = [],
  recentIds = [],
}: HeaderProps) {
  const [activeTab, setActiveTab] = useState<HeaderTabKey>('favorites')

  const items =
    activeTab === 'favorites'
      ? NAVIGATION_ITEMS.filter((item) => favoriteIds.includes(item.id))
      : NAVIGATION_ITEMS.filter((item) => recentIds.includes(item.id))

  return (
    <S.Wrapper>
      <Avatar
        url='https://lh3.google.com/u/0/d/14XkN-9Pep-UseVUor_Vzs-i8TzPlyOvV=w3600-h2080-iv1?auditContext=prefetch'
        name='Yechan Moon'
      />

      <S.Divider />

      <S.Tabs>
        {HEADER_LABELS.map((label) => {
          const isActive = activeTab === label.key

          return (
            <S.Tab
              key={label.key}
              onClick={() => setActiveTab(label.key)}
              active={isActive}
            >
              <Typo variant='button3' opacity={isActive ? 0.4 : 0.2}>
                {label.label}
              </Typo>
            </S.Tab>
          )
        })}
      </S.Tabs>

      {items.length > 0 ? (
        items.map((menu) => (
          <S.Item key={menu.id} onClick={() => onChangeActiveId?.(menu.id)}>
            <S.ItemIcon>
              <S.Indicator />
            </S.ItemIcon>
            <Typo variant='button2'>{menu.label}</Typo>
          </S.Item>
        ))
      ) : (
        <S.EmptyState>
          <Typo variant='button2' opacity={0.4}>
            Nothing
          </Typo>
        </S.EmptyState>
      )}
    </S.Wrapper>
  )
}
