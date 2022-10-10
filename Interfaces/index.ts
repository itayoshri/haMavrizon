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

export interface IFrontStudyGroup {
  name: string
  freeAbsences: number
  freeAnnualAbsences: number
  semesterHours: number
  lessonsCount: number
  absenceCounter: number
}
