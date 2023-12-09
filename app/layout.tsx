import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

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
      <body className={inter.className}>
        <header>TIC TAC TOE</header>
        <nav>
          <ul>
          <Link href='/'>MULTI-PLAYER</Link>
          <Link href='/single_player'>SINGLE PLAYER</Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
