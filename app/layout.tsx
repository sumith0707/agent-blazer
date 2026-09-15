import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jb-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AgentBlazer — Future in Formation',
  description:
    'AgentBlazer is a student-led technology club at St Joseph Engineering College, Mangaluru, exploring artificial intelligence, emerging technologies, and cybersecurity.',
  generator: 'v0.app',
  keywords: [
    'AgentBlazer',
    'St Joseph Engineering College',
    'AI club',
    'student innovation',
    'cybersecurity',
    'PromptOps',
  ],
  openGraph: {
    title: 'AgentBlazer — Future in Formation',
    description:
      'A student-led technology club exploring artificial intelligence, emerging technologies, cybersecurity, and the ideas shaping tomorrow.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#05060a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
