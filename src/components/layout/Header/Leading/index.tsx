'use client'

import { SidebarIcon, StarIcon } from '@phosphor-icons/react'
import { Icon, Typo } from 'components'

import * as S from './leading.styled'

interface LeadingProps {
  onToggleSidebar?: () => void
  activePageName?: string
  isFavorite?: boolean
  onToggleFavorite?: () => void
}

export default function Leading({
  onToggleSidebar,
  activePageName = 'Overview',
  isFavorite = false,
  onToggleFavorite,
}: LeadingProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.IconWrapper onClick={onToggleSidebar}>
          <Icon icon={SidebarIcon} size={16} />
        </S.IconWrapper>
        <S.IconWrapper onClick={onToggleFavorite}>
          <Icon
            icon={StarIcon}
            size={16}
            weight={isFavorite ? 'fill' : 'regular'}
            color={isFavorite ? '#FFB800' : 'inherit'}
          />
        </S.IconWrapper>
      </S.Content>
      <S.Content>
        <S.TextButton>
          <Typo variant='captionS' color='rgba(0, 0, 0, 0.40)'>
            Workspace
          </Typo>
        </S.TextButton>
        <Typo variant='captionS' color='rgb(0, 0, 0, 0.1)'>
          /
        </Typo>
        <S.TextButton>
          <Typo variant='captionS' color='rgba(0, 0, 0)'>
            {activePageName}
          </Typo>
        </S.TextButton>
      </S.Content>
    </S.Wrapper>
  )
}
