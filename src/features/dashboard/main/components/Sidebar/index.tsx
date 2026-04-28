'use client'

import Header from './Header'
import Navigation from './Navigation'

export default function Sidebar() {
  return (
    <Wrapper>
      <Header />
      <Navigation />
    </Wrapper>
  )
}

import styled from '@emotion/styled'

const Wrapper = styled.div`
  // Layout
  display: flex;
  width: 16.25rem;
  height: 64rem;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  // Style
  border-right: 0.031rem solid rgba(0, 0, 0, 0.10);
`