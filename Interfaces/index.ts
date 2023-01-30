import { IGrade } from '../utils/StudyGroups/grades'

export interface IStudyGroup {
  name: string
  groupId: number
  freeAbsences: number
  freeAnnualAbsences: number
  semesterHours: number
  lessonsCount: number
  weeklyHours: number
  absenceCounter: number
}

export interface IFrontAbsencesStudyGroup {
  name: string
  freeAbsences: number
  freeAnnualAbsences: number
  semesterHours: number
  lessonsCount: number
  absenceCounter: number
}

export interface IFrontGradesStudyGroup {
  name: string
  grades: IGrade[]
  average: number
}

export interface IStoredGradesStudyGroup extends IFrontGradesStudyGroup {
  selected: boolean[]
}
