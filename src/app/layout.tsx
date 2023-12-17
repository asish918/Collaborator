export const dynamic = 'force-dynamic';

import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google';
import './globals.css'
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
import { twMerge } from 'tailwind-merge';

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
      <body className={twMerge('bg-background', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
