import * as S from './header.styled'
import HeaderLeading from './Leading'

interface HeaderProps {
  onToggleSidebar?: () => void
  activePageName?: string
  isFavorite?: boolean
  onToggleFavorite?: () => void
}

export default function Header({
  onToggleSidebar,
  activePageName = 'Overview',
  isFavorite,
  onToggleFavorite,
}: HeaderProps) {
  return (
    <S.Wrapper>
      <HeaderLeading
        onToggleSidebar={onToggleSidebar}
        activePageName={activePageName}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </S.Wrapper>
  )
}
