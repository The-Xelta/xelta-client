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

export const Section = styled.div`
  // Layout
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 0.25rem;
  & + & {
    margin-top: 0.75rem;
  }
`

export const Title = styled.div`
  // Layout
  display: flex;
  padding: 0.25rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  
  // Typography
  color: rgba(0, 0, 0, 0.40);
`
