import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {
  TypographyWeight,
  TypographyVariant,
  FontWeight,
  Typography
} from 'styles'

interface StyledTypographyProps {
  variant: TypographyVariant;
  weight: TypographyWeight;
  color?: string;
}

export const StyledTypography = styled.p<StyledTypographyProps>`
  margin: 0;
  padding: 0;
  color: ${({ color }) => color ?? "inherit"};
  ${({ variant, weight }) => {
  const typo = Typography[variant];
  return css`
      font-size: ${typo.fontSize}px;
      line-height: ${typo.lineHeight};
      font-weight: ${FontWeight[weight]};
    `
}}
`