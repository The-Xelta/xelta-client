'use client'

import { Typo } from 'components'

import Profile from '../../Profile'
import * as S from './styled'

export default function Header() {
  return (
    <S.Wrapper>
      <Profile
        url={'https://avatars.githubusercontent.com/u/83855546'}
        name={'Yechan Moon'}
      />
      <Divider />
      <S.Group>
        <S.TextButton>
          <Typo variant={'button3'}>Favorites</Typo>
        </S.TextButton>
        <S.TextButton>
          <Typo variant={'button3'}>Recently</Typo>
        </S.TextButton>
      </S.Group>
      <S.Button>
        <Icon>
          <Dot />
        </Icon>
        <Typo variant={'button1'}>Overview</Typo>
      </S.Button>
      <S.Button>
        <Icon>
          <Dot />
        </Icon>
        <Typo variant={'button1'}>Project</Typo>
      </S.Button>
    </S.Wrapper>
  )
}

import styled from '@emotion/styled'

const Divider = styled.div`
  // Layout
  display: flex;
  padding: 0.125rem 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`

const Icon = styled.div`
  // Layout
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
`

const Dot = styled.div`
  // Layout
  width: 0.375rem;
  height: 0.375rem;
  
  // Style
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.20);
`