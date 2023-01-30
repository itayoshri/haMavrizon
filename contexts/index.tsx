// the context responsible for handling storage

import { createContext, useEffect, useState } from 'react'
import { Wrapper } from '../components/types'
import { IThemeProviderContext } from './types'
import { createUseContextHook } from './utils'

export const ThemeProviderContext = createContext<IThemeProviderContext>(
  {} as IThemeProviderContext
)

export const useThemeProvider = createUseContextHook(ThemeProviderContext)

export default function DataProvider({ children }: Wrapper) {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [darkMode])
  return (
    <ThemeProviderContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  )
}
