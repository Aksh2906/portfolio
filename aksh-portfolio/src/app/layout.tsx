import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aksh Aggarwal',
  description: 'Game developer exploring AI, computer vision, and interactive systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-theme set to dark by default; ThemeToggle will update it on the client
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  )
}
