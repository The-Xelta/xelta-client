'use client'

import type { Icon as PhosphorIcon } from '@phosphor-icons/react'

import { Icon as AppIcon, Typo } from 'components'

import * as S from './navItem.styled'

interface NavItemProps {
  icon: PhosphorIcon
  label: string
  active?: boolean
  disabled?: boolean
  onClick?: () => void
}

export default function NavItem({
  icon,
  label,
  active = false,
  disabled = false,
  onClick,
}: NavItemProps) {
  return (
    <S.Wrapper onClick={onClick} active={active} disabled={disabled}>
      <S.Indicator />

      <S.Content>
        <AppIcon
          icon={icon}
          size={20}
          disabled={disabled}
          weight={active ? 'fill' : 'regular'}
          opacity={active ? 1 : 0.4}
        />

        <Typo variant='button2'>{label}</Typo>
      </S.Content>
    </S.Wrapper>
  )
}
