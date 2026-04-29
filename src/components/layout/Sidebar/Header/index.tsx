'use client'

import { useState } from 'react'
import { Typo } from 'components'

import Avatar from '../Avatar'
import { HEADER_LABELS, HEADER_ITEMS } from '../constants'
import * as S from './header.styled'

type TabKey = 'favorites' | 'recently'

export default function Header() {
  const [activeTab, setActiveTab] = useState<TabKey>('favorites')

  return (
    <S.Wrapper>
      <Avatar
        url='https://lh3.google.com/u/0/d/14XkN-9Pep-UseVUor_Vzs-i8TzPlyOvV=w3600-h2080-iv1?auditContext=prefetch'
        name='Yechan Moon'
      />

      <S.Divider />

      <S.Tabs>
        {HEADER_LABELS.map((label) => {
          const isActive = activeTab === label.key

          return (
            <S.Tab
              key={label.key}
              onClick={() => setActiveTab(label.key)}
              active={isActive}
            >
              <Typo variant='button3' opacity={isActive ? 0.4 : 0.2}>
                {label.label}
              </Typo>
            </S.Tab>
          )
        })}
      </S.Tabs>

      {HEADER_ITEMS.map((menu) => (
        <S.Item key={menu.label}>
          <S.ItemIcon>
            <S.Indicator />
          </S.ItemIcon>
          <Typo variant='button2'>{menu.label}</Typo>
        </S.Item>
      ))}
    </S.Wrapper>
  )
}
