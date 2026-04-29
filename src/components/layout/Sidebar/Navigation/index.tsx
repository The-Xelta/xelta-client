'use client'

import { useState } from 'react'

import { Typo } from 'components'
import NavItem from '../NavItem'
import { NAVIGATION_SECTIONS } from '../constants'

import * as S from './nav.styled'

export default function Navigation() {
  const [activeId, setActiveId] = useState('overview')

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
              onClick={() => setActiveId(item.id)}
            />
          ))}
        </S.Section>
      ))}
    </S.Wrapper>
  )
}
