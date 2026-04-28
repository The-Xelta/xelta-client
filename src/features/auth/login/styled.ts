import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;
  
  padding: 0 20px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h1`
  margin: 0;

  font-size: 32px;
  font-weight: 700;
  line-height: 120%;

  color: #111827;
`

export const Description = styled.p`
  margin: 0;

  font-size: 15px;
  font-weight: 400;
  line-height: 150%;

  color: #6b7280;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;

  color: #111827;
`

export const Input = styled.input`
  width: 100%;
  height: 52px;

  padding: 0 16px;

  border: 1px solid #e5e7eb;
  border-radius: 14px;

  font-size: 15px;

  outline: none;

  transition: 0.2s;

  &:focus {
    border-color: #111827;
  }
`

export const ForgotButton = styled.button`
  align-self: flex-end;

  font-size: 14px;
  font-weight: 500;

  color: #6b7280;
`

export const LoginButton = styled.button`
  width: 100%;
  height: 52px;

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

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  font-size: 14px;

  color: #6b7280;
`

export const SignupButton = styled.button`
  font-size: 14px;
  font-weight: 600;

  color: #111827;
`