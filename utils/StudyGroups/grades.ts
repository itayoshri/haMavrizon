import { StudyGroup } from '.'
import { Grade, IMashovGrade } from '../../Interfaces/Mashov'

interface IGrade {
  grade: number
  eventDate: string
  timestamp: string
  gradeType: Grade
}

export class StudyGroupGrades implements StudyGroup {
  readonly groupId: number
  readonly name: string

  private grades: IGrade[]

  constructor({ name, groupId }: { name: string; groupId: number }) {
    this.name = name
    this.groupId = groupId
  }

  public addGrade(grade: IMashovGrade) {
    const newGrade = {} as IGrade
    this.grades
  }
}
