'use client'

import type {
  Icon as PhosphorIcon,
  IconProps as PhosphorIconProps,
} from '@phosphor-icons/react'
import * as S from './styled'

interface IconProps extends PhosphorIconProps {
  icon: PhosphorIcon
  opacity?: number
  disabled?: boolean
}

export default function Icon({
  icon: Icon,
  size,
  opacity,
  disabled,
  ...props
}: IconProps) {
  return (
    <S.Wrapper style={{ opacity }} disabled={disabled} size={size}>
      <S.Content size={size}>
        <Icon size={size} {...props} />
      </S.Content>
    </S.Wrapper>
  )
}
