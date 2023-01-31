import { Dispatch, SetStateAction } from 'react'
import { IFrontGradesStudyGroup } from '../Interfaces'

export interface IThemeProviderContext {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

export interface IGradesProviderContext {
  studyGroupsData: IFrontGradesStudyGroup[]
  setStudyGroupsData: Dispatch<SetStateAction<IFrontGradesStudyGroup[]>>
}
