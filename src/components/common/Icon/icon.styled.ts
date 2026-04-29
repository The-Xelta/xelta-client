import styled from '@emotion/styled'

export const Wrapper = styled.div<{
  disabled?: boolean
}>`
  // Layout
  display: flex;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  
  // Style
  border-radius: 0.75rem;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  
  &:hover {
    background: ${({ disabled }) => (disabled ? 'transparent' : 'rgba(0, 0, 0, 0.04)')};
  }
`

export const Content = styled.div<{ size?: string | number }>`
  // Layout
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => {
    if (!size) return '1rem'
    if (typeof size === 'number') return `${size / 16}rem`
    return size
  }};
  height: ${({ size }) => {
    if (!size) return '1rem'
    if (typeof size === 'number') return `${size / 16}rem`
    return size
  }};
`
