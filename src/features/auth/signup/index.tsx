'use client'

import { Typo } from 'components'

export default function SignUpPage() {
  return (
    <Container>
      <Content>
        <Header>
          <Typo variant={'headlineM'} weight={'bold'}>
            Welcome Back
          </Typo>
          <Typo variant={'captionL'}>Sign in to continue with Xelta</Typo>
        </Header>
        <Form>
          <Field>
            <Typo variant={'body1'}>Email</Typo>
            <Input type='email' placeholder='example@xelta.app' />
          </Field>
          <Field>
            <Typo variant={'body1'}>Password</Typo>
            <Input type='password' placeholder='••••••••' />
          </Field>
          <BtnWrapper>
            <ForgetBtn type='button'>
              <Typo variant={'button2'}>Forgot password?</Typo>
            </ForgetBtn>
            <LoginBtn type='submit'>
              <Typo variant={'button2'}>Sign in</Typo>
            </LoginBtn>
          </BtnWrapper>
        </Form>
      </Content>
    </Container>
  )
}

import styled from '@emotion/styled'

const Container = styled.div`
  // Position
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  
  // Style
  background: #fff;
`

const Content = styled.div`
  // Position
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
  padding: 0 20px;
`

const Header = styled.div`
  // Position
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Form = styled.form`
  // Position
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Field = styled.div`
  // Position
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Input = styled.input`
  // Position
  width: 100%;
  height: 52px;
  padding: 0 16px;
  box-sizing: border-box;
  
  // Style
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  
  font-size: 15px;
  
  outline: none;
  transition: 0.2s;

  &:focus {
    border-color: #111827;
  }
`

const BtnWrapper = styled.div`
  // Position
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ForgetBtn = styled.button`
  // Position
  align-self: flex-end;

  // Style
  color: #6b7280;
`

const LoginBtn = styled.button`
  // Position
  width: 100%;
  height: 52px;
  
  // Style
  border-radius: 14px;

  background: #111827;
  color: #ffffff;

  font-size: 15px;
  font-weight: 600;

  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`
