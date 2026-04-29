'use client'

import { Typo, Icon } from 'components'
import {
  BellIcon,
  ClockCounterClockwiseIcon,
  MagnifyingGlassIcon,
  SidebarIcon,
} from '@phosphor-icons/react'

import * as S from './styled'

export default function Trailing() {
  return (
    <S.Wrapper>
      <S.Content>
        <Icon icon={MagnifyingGlassIcon} size={16} />
        <Icon icon={ClockCounterClockwiseIcon} size={16} />
        <Icon icon={BellIcon} size={16} />
        <Icon icon={SidebarIcon} size={16} />
      </S.Content>
    </S.Wrapper>
  )
}