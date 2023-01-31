import { Dispatch, SetStateAction } from 'react'
import { IFrontAbsencesStudyGroup, IFrontGradesStudyGroup } from '../Interfaces'

export interface IThemeProviderContext {
  darkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

export interface IStudyGroupsProviderContext {
  gradesStudyGroups: IFrontGradesStudyGroup[]
  setGradesStudyGroups: Dispatch<SetStateAction<IFrontGradesStudyGroup[]>>
  absencesStudyGroups: IFrontAbsencesStudyGroup[]
  setAbsencesStudyGroups: Dispatch<SetStateAction<IFrontAbsencesStudyGroup[]>>
}
