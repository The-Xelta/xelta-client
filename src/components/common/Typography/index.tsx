import { ReactNode, ElementType } from 'react'
import * as S from './styled'

import {
  TypographyVariant,
  TypographyWeight
} from 'styles'

interface TypographyProps {
  children: ReactNode
  variant: TypographyVariant
  weight?: TypographyWeight
  as?: ElementType
  color?: string
  className?: string
}

export default function Typo(
  {
    children,
    variant,
    weight = 'regular',
    as = 'p',
    color,
    className
  }: TypographyProps
) {
  return (
    <S.StyledTypography
      as={as}
      variant={variant}
      weight={weight}
      color={color}
      className={className}
    >
      {children}
    </S.StyledTypography>
  )
}