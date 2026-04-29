'use client'

import * as S from './styled'
import Leading from './Leading'
import Trailing from './Trailing'

interface HeaderProps {
  onToggleSidebar?: () => void
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <S.Wrapper>
      <Leading onToggleSidebar={onToggleSidebar} />
      <Trailing />
    </S.Wrapper>
  )
}