import styled from '@emotion/styled'

export const Wrapper = styled.div<{
  active?: boolean
  disabled?: boolean
}>`
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
  background: ${({ active }) =>
    active ? 'rgba(0, 0, 0, 0.04)' : 'transparent'};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover {
    background: ${({ disabled }) =>
      disabled ? 'transparent' : 'rgba(0, 0, 0, 0.04)'};
  }
`

export const Indicator = styled.div`
  // Layout
  width: 1rem;
  height: 1rem;
`

export const Content = styled.div`
  // Layout
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0.5rem 0.5rem;
  flex: 1 0 0;
  flex-wrap: wrap;
`
