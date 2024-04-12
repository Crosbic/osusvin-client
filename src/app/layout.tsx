import './globals.css'

import type { Metadata } from 'next'
import { Sofia_Sans } from 'next/font/google'
import React from 'react'

import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/widgets/header'

const font = Sofia_Sans({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'osu! svin tournament 2',
  description: 'Created by IT Druzhina with ❤',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
