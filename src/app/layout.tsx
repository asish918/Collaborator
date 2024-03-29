export const dynamic = 'force-dynamic';

import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google';
import './globals.css'
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
import { twMerge } from 'tailwind-merge';
import AppStateProvider from '@/lib/providers/state-provider';
import { SupabaseUserProvider } from '@/lib/providers/supabase-user-provider';
import { SocketProvider } from '@/lib/providers/socket-provider';
import { Toaster } from '@/components/ui/toaster';

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
          <AppStateProvider>
            <SupabaseUserProvider>
              <SocketProvider>
                {children}
                <Toaster />
              </SocketProvider>
            </SupabaseUserProvider>
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
