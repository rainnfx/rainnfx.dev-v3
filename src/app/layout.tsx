import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '../../components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'rainnfx.dev',
  description: 'Portfolio Site for rainnfx.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
