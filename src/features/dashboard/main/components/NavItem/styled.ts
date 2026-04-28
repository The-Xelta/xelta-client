import styled from '@emotion/styled'

export const NavItem = styled.div`
  // Layout
  display: flex;
  padding: 0.5rem;
  align-items: center;
  align-content: center;
  gap: 0.25rem 0.25rem;
  align-self: stretch;
  flex-wrap: wrap;
  
  // Style
  border-radius: 0.75rem;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`

export const Icons = styled.div`
  // Layout
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
`

export const Group = styled.div`
  // Layout
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0.5rem 0.5rem;
  flex: 1 0 0;
  flex-wrap: wrap;
`