import { Dispatch, SetStateAction } from 'react'

export interface IThemeProviderContext {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}
