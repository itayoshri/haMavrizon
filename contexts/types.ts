import { Dispatch, SetStateAction } from 'react'

export interface IProviderContext {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}
