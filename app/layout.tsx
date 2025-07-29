import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'primereact/resources/themes/lara-light-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { PrimeReactProvider } from '@/providers/PrimeReactProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alisa Poghosyan - Frontend Developer',
  description: 'Skilled frontend developer with 4+ years experience in React.js, Next.js, and TypeScript. Building responsive web applications with modern technologies.',
  keywords: 'Frontend Developer, React, Next.js, TypeScript, JavaScript, Tailwind CSS',
  authors: [{ name: 'Alisa Poghosyan' }],
  openGraph: {
    title: 'Alisa Poghosyan - Frontend Developer',
    description: 'Skilled frontend developer with 4+ years experience in React.js, Next.js, and TypeScript.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <PrimeReactProvider>
            {children}
          </PrimeReactProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}