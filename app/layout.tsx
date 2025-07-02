import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vijay R - Senior OutSystems Developer',
  description: 'Portfolio of Vijay R, a passionate Senior OutSystems Developer specializing in low-code solutions, JavaScript, SQL, .NET, and cloud technologies.',
  keywords: 'OutSystems, Developer, JavaScript, SQL, .NET, Cloud, AWS, Azure, Portfolio',
  authors: [{ name: 'Vijay R' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}