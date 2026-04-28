'use client'

import type { Icon } from '@phosphor-icons/react'

import { Typo } from 'components'
import * as S from './styled'

interface NavButtonProps {
  icon: Icon
  label: string
  onClick?: () => void
  active?: boolean
  disabled?: boolean
}

export default function NavItem(
  { icon: Icon, label, onClick, active, disabled }: NavButtonProps
) {
  return (
    <S.NavItem>
      <S.Icons />
      <S.Group>
        <S.Icons
          style={{ width: '1.25rem', height: '1.25rem'}}
        >
          <Icon size={20} weight={active ? 'fill' : 'regular'} />
        </S.Icons>
        <Typo variant={'button2'}>
          {label}
        </Typo>
      </S.Group>
    </S.NavItem>
  )
}