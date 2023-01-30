import { Dispatch, SetStateAction } from 'react'
import { IStoredGradesStudyGroup } from '../Interfaces'

export interface IThemeProviderContext {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

export interface IGradesProviderContext {
  studyGroups: IStoredGradesStudyGroup[]
  setStudyGroups: Dispatch<SetStateAction<IStoredGradesStudyGroup[]>>
}
