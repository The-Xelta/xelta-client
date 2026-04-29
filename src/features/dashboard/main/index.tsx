'use client'

import { useState } from 'react'
import * as S from './styled'
import { Header, Sidebar } from 'components'

export default function DashboardMain() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <S.Wrapper>
      {isSidebarOpen && <Sidebar />}
      <S.MainContainer>
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <S.ContentArea>{/* 실제 대시보드 내용이 들어갈 자리 */}</S.ContentArea>
      </S.MainContainer>
    </S.Wrapper>
  )
}
