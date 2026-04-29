import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  overflow: hidden;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow: hidden;
`

export const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: #ffffff;
`
