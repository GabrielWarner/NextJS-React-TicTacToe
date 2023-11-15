import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gabes Tic Tac Toe',
  description: 'Single player or Mulitplayer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <h1>HI</h1>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
