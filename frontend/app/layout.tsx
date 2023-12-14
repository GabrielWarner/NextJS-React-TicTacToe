import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import AuthProvider from './context/AuthProvider'

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
        <AuthProvider>
        <header>TIC TAC TOE</header>
        <nav>
          <ul>
          <Link href='/multiplayer'>LAN PLAY</Link>
          <br></br>
          <Link href='/login'>LOGIN</Link>
          <br></br>
          <Link href='/single_player'>SINGLE PLAYER</Link>
          <br></br>
          <Link href='/api/auth/signout'>SIGN OUT</Link>
          </ul>
        </nav>
        {children}
        </AuthProvider>
      </body>
    </html>
  )
}
