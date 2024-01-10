import clsx from 'clsx'
import { Inter, Lexend } from 'next/font/google'

import '@/global.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - KauaWDev',
    default: 'KauaWDev - Developer Web',
  },
  description: 'KauaWDev - Developer Web',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
