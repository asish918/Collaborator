import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google';
import './globals.css'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion',
  description: 'The best place to collaborate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
