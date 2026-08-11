import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anton, Space_Mono } from 'next/font/google'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KEVEN — MOTION DESIGNER / TIMON, MA',
  description:
    'KEVEN — Motion Designer de Timon, Maranhão. Animação, identidade visual em movimento e experiências digitais com After Effects e Element 3D.',
  generator: 'v0.app',
  openGraph: {
    title: 'KEVEN — MOTION DESIGNER',
    description:
      'Experiência visual autoral de um Motion Designer de Timon — Maranhão.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${spaceMono.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
