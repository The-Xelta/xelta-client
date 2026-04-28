'use client'

import { Typo } from 'components'

import * as S from './styled'

interface ProfileProps {
  url: string
  name: string
}

export default function Profile(
  { url, name }: ProfileProps
) {
  return (
    <S.Wrapper>
      <S.Image src={url} alt={name} />
      <Typo variant={'captionM'}>{name}</Typo>
    </S.Wrapper>
  )
}