'use client'

import Header from './Header'
import Navigation from './Navigation'
import * as S from './sidebar.styled'

export default function Sidebar() {
  return (
    <S.Container>
      <Header />
      <Navigation />
    </S.Container>
  )
}
