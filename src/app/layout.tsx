import { Navbar } from '@/components/Navbar'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

import {
  short_name as APP_NAME,
  name as APP_DEFAULT_TITLE,
  theme_color as themeColor,
  description as APP_DESCRIPTION,
} from './manifest.json'

const inter = Inter({ subsets: ['latin'] })

const APP_TITLE_TEMPLATE = `%s - ${APP_NAME}`

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div id="app" className="min-h-svh w-svw overflow-hidden">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
