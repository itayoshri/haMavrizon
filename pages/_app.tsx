import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import ThemeProvider, { GradesProvider } from '../contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GradesProvider>
        <Component {...pageProps} />
        <Analytics />
      </GradesProvider>
    </ThemeProvider>
  )
}

export default MyApp
