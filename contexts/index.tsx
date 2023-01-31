// the context responsible for handling storage

import { createContext, useEffect, useState } from 'react'
import { Wrapper } from '../components/types'
import { IGradesProviderContext, IThemeProviderContext } from './types'
import { createUseContextHook } from './utils'

export const ThemeProviderContext = createContext<IThemeProviderContext>(
  {} as IThemeProviderContext
)

export const GradesProviderContext = createContext<IGradesProviderContext>(
  {} as IGradesProviderContext
)

export const useThemeProvider = createUseContextHook(ThemeProviderContext)
export const useGradesProvider = createUseContextHook(GradesProviderContext)

export default function ThemeProvider({ children }: Wrapper) {
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

export function GradesProvider({ children }: Wrapper) {
  const [studyGroupsData, setStudyGroupsData] = useState([])
  return (
    <GradesProviderContext.Provider
      value={{
        studyGroupsData,
        setStudyGroupsData,
      }}
    >
      {children}
    </GradesProviderContext.Provider>
  )
}
