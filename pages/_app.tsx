import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import ThemeProvider, { ModesProvider, StudyGroupsProvider } from '../contexts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <StudyGroupsProvider>
        <ModesProvider>
          <Component {...pageProps} />
          <Analytics />
        </ModesProvider>
      </StudyGroupsProvider>
    </ThemeProvider>
  )
}

export default MyApp
