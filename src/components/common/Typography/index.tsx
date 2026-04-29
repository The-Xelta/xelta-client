import type { ElementType, ReactNode } from 'react'

import type { TypographyVariant, TypographyWeight } from 'styles'

import * as S from './typography.styled'

interface TypographyProps {
  children: ReactNode
  variant: TypographyVariant
  weight?: TypographyWeight
  as?: ElementType
  color?: string
  opacity?: number
  className?: string
}

export default function Typo({
  children,
  variant,
  weight = 'regular',
  as = 'p',
  color,
  opacity,
  className,
}: TypographyProps) {
  return (
    <S.StyledTypography
      as={as}
      variant={variant}
      weight={weight}
      color={color}
      opacity={opacity}
      className={className}
    >
      {children}
    </S.StyledTypography>
  )
}
