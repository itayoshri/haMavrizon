// the context responsible for handling storage

import { createContext, useEffect, useState } from 'react'
import { Wrapper } from '../components/types'
import { IProviderContext } from './types'
import { createUseContextHook } from './utils'

export const ProviderContext = createContext<IProviderContext>(
  {} as IProviderContext
)

export const useProvider = createUseContextHook(ProviderContext)

export default function DataProvider({ children }: Wrapper) {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [darkMode])
  return (
    <ProviderContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ProviderContext.Provider>
  )
}
