// the context responsible for handling storage

import { createContext } from 'react'
import { Wrapper } from '../components/types'
import { IProviderContext } from './types'
import { createUseContextHook } from './utils'

export const ProviderContext = createContext<IProviderContext>(
  {} as IProviderContext
)

export const useProvider = createUseContextHook(ProviderContext)

export default function DataProvider({ children }: Wrapper) {
  return (
    <ProviderContext.Provider value={{}}>{children}</ProviderContext.Provider>
  )
}
