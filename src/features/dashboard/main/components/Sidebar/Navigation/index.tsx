'use client'

import { ChartPieSliceIcon } from '@phosphor-icons/react'

import NavItem from '../../NavItem'
import { Typo } from 'components'
import * as S from './styled'

export default function Navigation() {
  return (
    <S.Wrapper>
      <S.Title>
        <Typo variant={'captionM'}>Dashboards</Typo>
      </S.Title>
      <NavItem
        icon={ChartPieSliceIcon}
        label={'Overview'}
      />
      <NavItem
        icon={ChartPieSliceIcon}
        label={'Overview'}
      />
      <NavItem
        icon={ChartPieSliceIcon}
        label={'Overview'}
      />
      <NavItem
        icon={ChartPieSliceIcon}
        label={'Overview'}
      />
    </S.Wrapper>
  )
}