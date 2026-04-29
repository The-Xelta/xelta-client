'use client'

import type { DashboardPageId } from 'features/dashboard/navigation'

import SidebarHeader from './Header'
import Navigation from './Navigation'
import * as S from './sidebar.styled'

interface SidebarProps {
  activeId?: DashboardPageId
  onChangeActiveId?: (id: DashboardPageId) => void
  favoriteIds?: DashboardPageId[]
  recentIds?: DashboardPageId[]
}

export default function Sidebar({
  activeId,
  onChangeActiveId,
  favoriteIds = [],
  recentIds = [],
}: SidebarProps) {
  return (
    <S.Container>
      <SidebarHeader
        onChangeActiveId={onChangeActiveId}
        favoriteIds={favoriteIds}
        recentIds={recentIds}
      />
      <Navigation activeId={activeId} onChangeActiveId={onChangeActiveId} />
    </S.Container>
  )
}
