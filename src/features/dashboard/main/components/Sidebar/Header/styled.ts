import styled from '@emotion/styled'

export const Wrapper = styled.div`
  // Layout
  display: flex;
  padding-bottom: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`

export const Group = styled.div`
  // Layout
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0.5rem 0.5rem;
  align-self: stretch;
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
  
  // Typography
  color: rgba(0, 0, 0, 0.20); // 셀렉되면 0.40
`

export const Button = styled.button`
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
`