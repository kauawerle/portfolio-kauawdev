import clsx from 'clsx'

import '@/global.css'
import localFont from '@next/font/local'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - KauaWDev',
    default: 'KauaWDev - Developer Web',
  },
  description: 'KauaWDev - Developer Web',
}


const cascadia = localFont({
  src: [
    {
      path: '../fonts/cascadia-code.ttf',
      weight: '800',
    },
  ],
  variable: '--font-helvetica',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full scroll-smooth bg-white antialiased', cascadia.variable)}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
