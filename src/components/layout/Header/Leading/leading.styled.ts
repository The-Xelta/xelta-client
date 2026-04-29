import styled from '@emotion/styled'

export const IconWrapper = styled.div`
  cursor: pointer;
`

export const Wrapper = styled.div`
  // Layout
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Content = styled.div`
  // Layout
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0.5rem 0.5rem;
  flex-wrap: wrap;
`

export const TextButton = styled.button`
  // Layout
  display: flex;
  min-width: 1.5rem;
  min-height: 1.5rem;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  
  // Style
  border-radius: 0.75rem;
  cursor: default;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`
