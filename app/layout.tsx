import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Query Dahboard',
  description: 'A powerful data query dashboard',
  generator: 'Created by Aafreen Khan using Next.js',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
