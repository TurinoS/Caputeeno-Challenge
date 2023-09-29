import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import StyledJsxRegistry from '../../registry'
import { ContextApiProvider } from '@/context/ContextApi'

const saira = Saira({ 
  weight: ['300', '400', '500', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Caputeeno',
  description: 'Generated by Paulo Turino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <ContextApiProvider>
          <StyledJsxRegistry>
                <Header />
                {children}
          </StyledJsxRegistry>
        </ContextApiProvider>
      </body>
    </html>
  )
}
