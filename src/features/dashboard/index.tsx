'use client'

import { Header, Sidebar } from 'components'

import * as S from './dashboard.styled'
import { DASHBOARD_PAGE_COMPONENTS } from './pages/registry'
import { useDashboardState } from './useDashboardState'

export default function Dashboard() {
  const {
    activeId,
    activeItem,
    favoriteIds,
    isFavorite,
    isSidebarOpen,
    recentIds,
    setActiveId,
    toggleFavorite,
    toggleSidebar,
  } = useDashboardState()

  const ActivePage = DASHBOARD_PAGE_COMPONENTS[activeId]

  return (
    <S.Wrapper>
      {isSidebarOpen && (
        <Sidebar
          activeId={activeId}
          onChangeActiveId={setActiveId}
          favoriteIds={favoriteIds}
          recentIds={recentIds}
        />
      )}
      <S.MainContainer>
        <Header
          onToggleSidebar={toggleSidebar}
          activePageName={activeItem.label}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
        />
        <S.ContentArea>
          <ActivePage />
        </S.ContentArea>
      </S.MainContainer>
    </S.Wrapper>
  )
}
