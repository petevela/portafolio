import './globals.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/queryClient'
// Ensure the Navbar component exists at '../components/Navbar.tsx' or update the path below if necessary
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Portafolio de Pedro Velasco',
  description: 'Desarrollador Web y de Software - Portafolio personal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  )
}
