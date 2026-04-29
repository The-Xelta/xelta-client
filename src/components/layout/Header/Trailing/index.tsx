'use client'

import { Typo, Icon } from 'components'
import {
  BellIcon,
  ClockCounterClockwiseIcon,
  MagnifyingGlassIcon,
  SidebarIcon,
} from '@phosphor-icons/react'

import * as S from './trailing.styled'

interface TrailingProps {
  onToggleSidebar?: () => void
}

export default function Trailing({ onToggleSidebar }: TrailingProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <Icon icon={MagnifyingGlassIcon} size={16} />
        <Icon icon={ClockCounterClockwiseIcon} size={16} />
        <Icon icon={BellIcon} size={16} />
        <S.IconWrapper onClick={onToggleSidebar}>
          <Icon icon={SidebarIcon} size={16} />
        </S.IconWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
