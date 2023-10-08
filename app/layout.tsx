import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NextBreadcrumb } from '@/components/breadcrumbs'


const inter = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CYBERIA',
  description: 'IT-company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />

        <NextBreadcrumb />

        <main className={inter.className}>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
