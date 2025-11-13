import { ThemeProvider } from '@/components/layout/ThemeProvider'
import './globals.css'

export const metadata = {
  title: 'Nexus - Build E-commerce Infinitely',
  description: 'The composable, high-performance e-commerce infrastructure for building world-class, enterprise-ready shopping experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}