// the context responsible for handling storage

import { createContext, useEffect, useState } from 'react'
import { Wrapper } from '../components/types'
import { Modes } from '../pages'
import {
  IModesProviderContext,
  IStudyGroupsProviderContext,
  IThemeProviderContext,
} from './types'
import { createUseContextHook } from './utils'

export const ThemeProviderContext = createContext<IThemeProviderContext>(
  {} as IThemeProviderContext
)

export const StudyGroupsProviderContext =
  createContext<IStudyGroupsProviderContext>({} as IStudyGroupsProviderContext)

export const ModesProviderContext = createContext<IModesProviderContext>(
  {} as IModesProviderContext
)

export const useThemeProvider = createUseContextHook(ThemeProviderContext)
export const useGradesProvider = createUseContextHook(
  StudyGroupsProviderContext
)
export const useModesProvider = createUseContextHook(ModesProviderContext)

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

export function StudyGroupsProvider({ children }: Wrapper) {
  const [gradesStudyGroups, setGradesStudyGroups] = useState([])
  const [absencesStudyGroups, setAbsencesStudyGroups] = useState([])

  return (
    <StudyGroupsProviderContext.Provider
      value={{
        gradesStudyGroups,
        setGradesStudyGroups,
        absencesStudyGroups,
        setAbsencesStudyGroups,
      }}
    >
      {children}
    </StudyGroupsProviderContext.Provider>
  )
}

export function ModesProvider({ children }: Wrapper) {
  const [selectedMode, setMode] = useState<Modes>('absences')

  return (
    <ModesProviderContext.Provider
      value={{
        selectedMode,
        setMode,
      }}
    >
      {children}
    </ModesProviderContext.Provider>
  )
}
