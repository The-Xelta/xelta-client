'use client'

import * as S from './styled'

export default function LoginPage() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>Welcome back</S.Title>
          <S.Description>
            Sign in to continue with Xelta
          </S.Description>
        </S.Header>

        <S.Form>
          <S.Field>
            <S.Label>Email</S.Label>
            <S.Input
              type='email'
              placeholder='you@example.com'
            />
          </S.Field>

          <S.Field>
            <S.Label>Password</S.Label>
            <S.Input
              type='password'
              placeholder='••••••••'
            />
          </S.Field>

          <S.ForgotButton type='button'>
            Forgot password?
          </S.ForgotButton>

          <S.LoginButton type='button'>
            Sign in
          </S.LoginButton>
        </S.Form>

        <S.Footer>
          Don&apos;t have an account?
          <S.SignupButton type='button'>
            Sign up
          </S.SignupButton>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  )
}