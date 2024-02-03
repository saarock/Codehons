import type { Metadata } from 'next'
import { Inter, Heebo } from 'next/font/google'
import './globals.css';
import Footer from '@/comp/footer/Footer';
import Nav from '@/comp/nav/Nav';

const inter = Heebo({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <header>
          <Nav />
        </header>
        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
