'use client'

import { Typo } from 'components'
import {
  type DashboardPageId,
  NAVIGATION_SECTIONS,
} from 'features/dashboard/navigation'

import NavItem from '../NavItem'

import * as S from './nav.styled'

interface NavigationProps {
  activeId?: DashboardPageId
  onChangeActiveId?: (id: DashboardPageId) => void
}

export default function Navigation({
  activeId,
  onChangeActiveId,
}: NavigationProps) {
  return (
    <S.Wrapper>
      {NAVIGATION_SECTIONS.map((section) => (
        <S.Section key={section.title}>
          <S.Title>
            <Typo variant='captionM'>{section.title}</Typo>
          </S.Title>

          {section.items.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeId === item.id}
              onClick={() => onChangeActiveId?.(item.id)}
            />
          ))}
        </S.Section>
      ))}
    </S.Wrapper>
  )
}
