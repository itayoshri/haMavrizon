import { Dispatch, SetStateAction } from 'react'
import { IFrontGradesStudyGroup } from '../Interfaces'

export interface IThemeProviderContext {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

export interface IGradesProviderContext {
  studyGroups: IFrontGradesStudyGroup[]
  setStudyGroups: Dispatch<SetStateAction<IFrontGradesStudyGroup[]>>
}
