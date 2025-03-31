import './globals.css'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ImageCarousel from './components/ImageCarousel'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

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
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={clsx(inter.className, `bg-slate-100`)}>
          <Navbar />
          <main className='h-screen p-16'>
            <ImageCarousel />
            {children}
          </main>

        </body>
      </html>
    </ClerkProvider>
  )
}

