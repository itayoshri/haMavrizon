import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import ThemeProvider, { StudyGroupsProvider } from '../contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <StudyGroupsProvider>
        <Component {...pageProps} />
        <Analytics />
      </StudyGroupsProvider>
    </ThemeProvider>
  )
}

export default MyApp
