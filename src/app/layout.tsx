import { ReactNode } from 'react'

import Providers from './providers'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xelta',
  description: 'Xelta Client',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
