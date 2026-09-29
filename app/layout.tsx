import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Fraunces, Space_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const fraunces = Fraunces({
  weight: ['400', '500'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KEVEN — MOTION · EDIÇÃO · FOTO / TIMON, MA',
  description:
    'Portfólio de Keven — motion designer, editor de vídeo e fotógrafo de Timon — Maranhão. Animação 2D/3D, edição com ritmo e fotografia autoral.',
  openGraph: {
    title: 'KEVEN — MOTION DESIGN / EDIÇÃO / FOTOGRAFIA',
    description:
      'Animação, edição de vídeo e fotografia — direto de Timon, Maranhão, para qualquer lugar.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#101014',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${fraunces.variable} ${spaceMono.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
