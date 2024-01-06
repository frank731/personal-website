import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const ibm_plex_mono = IBM_Plex_Mono({subsets: ['latin'], weight: '500'})

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
      <body className={ibm_plex_mono.className}>{children}</body>
    </html>
  )
}
