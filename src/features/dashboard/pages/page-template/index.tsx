import { Typo } from 'components'

import * as S from './pageTemplate.styled'

interface DashboardPageTemplateProps {
  title: string
  description: string
}

export default function DashboardPageTemplate({
  title,
  description,
}: DashboardPageTemplateProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <Typo variant='title2'>{title}</Typo>
        <Typo variant='body1' color='rgba(0, 0, 0, 0.5)'>
          {description}
        </Typo>
      </S.Content>
    </S.Wrapper>
  )
}
