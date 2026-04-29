'use client'

import { Typo } from 'components'
import * as S from './avatar.styled'

interface AvatarProps {
  url: string
  name: string
}

export default function Avatar({ url, name }: AvatarProps) {
  return (
    <S.Wrapper>
      <S.AvatarImage src={url} />
      <Typo variant={'captionM'}>{name}</Typo>
    </S.Wrapper>
  )
}
