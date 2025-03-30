import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ImageCarousel from './components/ImageCarousel'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'paiN Gaming',
  description: 'Loja de artigos da paiN Gaming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='bg-slate-50 h-screen p-16'>
          <ImageCarousel />
          {children}
        </main>

      </body>
    </html>
  )
}

