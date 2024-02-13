import type { Metadata } from 'next'
import { VT323 } from 'next/font/google'
import './globals.css'

const vt323 = VT323({subsets: ['latin'], weight: '400', variable: '--font-vt323',})

export const metadata: Metadata = {
  title: 'Frank Li',
  description: 'Frank Li\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={vt323.className}>{children}</body>
    </html>
  )
}
