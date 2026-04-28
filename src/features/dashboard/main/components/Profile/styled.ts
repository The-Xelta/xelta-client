import styled from '@emotion/styled'

export const Wrapper = styled.div`
  // Layout
  display: flex;
  padding: 0.5rem;
  align-items: center;
  align-content: center;
  gap: 0.5rem 0.5rem;
  align-self: stretch;
  flex-wrap: wrap;
  
  // Style
  border-radius: 0.5rem;
`

export const Image = styled.img`
  // Layout
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  
  // Style
  border-radius: 5rem;
  border: 0.031rem solid rgba(0, 0, 0, 0.10);
  background: rgba(0, 0, 0, 0.04);
`