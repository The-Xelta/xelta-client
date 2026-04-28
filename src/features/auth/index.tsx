'use client'

import { useState } from 'react'

// Auth Page (Login, Signup)
import LoginPage from './login'
import SignupPage from './signup'

type AuthState = 'login' | 'signup'

export default function AuthPage() {
  const [state, setState] = useState<AuthState>('signup')
  return (
    <Wrapper>
      <Content>
        {state === 'login' ? <LoginPage /> : <SignupPage />}
      </Content>
    </Wrapper>
  )
}

// Styling
import styled from '@emotion/styled'

const Wrapper = styled.div`
  // Position
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  
  // Style
  background-image: linear-gradient(rgba(0, 0, 0, 0.65)), url('https://lh3.googleusercontent.com/rd-d/ALs6j_G-E7_hl9k0dZXvRyf7dTVxixT2HnfEGYIbfCpPJW1wQBYG6qGmiSwunC1ACHgNGpi5YKdTB-gCd6TyI0mfrGGz-p6xFHG3FglyhAQqhCyrnyEexS4kMCcTkLPkcK7lCDlCKx4_KZBa4kHne_YTcWN824rLmlGLsRXtSLZcdCj4s9u6OeP10gAmDNx_SVhkLP2GvcqANOtFhP-5v8W4DcX1-8TeFAbVZH0nsyNoex2wevjKYJG8tBh5GWLKQYy5Ye-62f7Lqwd4WK6y0bQvRFy1yau78UKeFicpUWi5iFMSWTmChrqdvqcRQb8j0Jgt8yakwwEKDL7UTthoOR429kOgnlPEp_IbomsHg88y4FqhyELGBk1M_YV_AI5OncVTz0WmwAnV1gaRDji8Tl6nM1nz1rwOP8TGuyddwV4_Xzl97ufSQiL8AzcfnD7QJAxlIBC6RWMTLn0aKD9CilacJi-zLSpMKLBZJ0SsiRIhOyygf7z-UvySBv7TlT2I5MQlrzICIjEcGB_GK1qD8x6JjuPoWrgjRTFxhAn3jjzqLLkHxXE-jzw8Yi_LYfC-qPGu6Hq1hLIIcYBvfLpRU8zmV5wNb2OittTR6Yg0TS1Od7gh-IWEhYn30QqMscCZ5D51SXv3eq67RdNh7SuWeD5fY28do1q4QjGZ46Xlfg3-l7Cya-csZ4zTrXjLSZ3mV3MhvmDwEhVFMAvi8utns1DoZkZzk3dUWgi4J9NS5R7iFzIXQPtJByogt7A4zReswP-JCLRKaaLLM_mmIqi9HeDa4F4WWmmbK8ZbEXG3GbQGI-Dr5q11zke3l1bxYkuiWb25wCYiT97i18TDPzRP8RRahqNb_J1NunayggtmmMtpunyk2CybCL4gsn42LWoCOnPsqxbbWoA43RKdqIFgr69W7nb8m0NCDGRNR4VYYmPix4-6we7tO64BsghLuaXgsksB8ey47vOidmuRXRS0FEf39gBvg8G6d0SwirBwDtO2vJdUqshKLHl9sSXqYulVJbYnZurASQc4AjWr8toUJifWDrpN4w2rhDLI5n6Aj4Kkn3uQpRtPFwlax02FwUKTNY5MgYaI22ql81kSuj0OFBS6j1NfZXIlx4-RXHYfviuUeA5Dm-f4rwiSbMpyV8yaeg-l3JtXw3grRvyPbPEJpmfGA5EGseUAoh2fPj50=w3600-h2080?auditContext=forDisplay');
  background-size: cover;
  background-position: center 40%;
  background-repeat: no-repeat;
`

const Content = styled.div`
  // Position
  position: absolute;
  top: 0;
  right: 0;
  width: 440px;
  height: 100%;
`