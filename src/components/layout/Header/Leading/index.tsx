'use client'

import { Typo, Icon } from 'components'
import { SidebarIcon, StarIcon } from '@phosphor-icons/react'

import * as S from './leading.styled'

interface LeadingProps {
  onToggleSidebar?: () => void
}

export default function Leading({ onToggleSidebar }: LeadingProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.IconWrapper onClick={onToggleSidebar}>
          <Icon icon={SidebarIcon} size={16} />
        </S.IconWrapper>
        <Icon icon={StarIcon} size={16} />
      </S.Content>
      <S.Content>
        <S.TextButton>
          <Typo variant={'captionS'} color={'rgba(0, 0, 0, 0.40)'}>
            Dashboards
          </Typo>
        </S.TextButton>
        <Typo variant={'captionS'} color={'rgb(0, 0, 0, 0.1)'}>
          /
        </Typo>
        <S.TextButton>
          <Typo variant={'captionS'} color={'rgba(0, 0, 0)'}>
            Overview
          </Typo>
        </S.TextButton>
      </S.Content>
    </S.Wrapper>
  )
}
