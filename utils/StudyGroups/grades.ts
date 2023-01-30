import { StudyGroup, StudyGroupsBuilder } from '.'
import { IFrontGradesStudyGroup } from '../../Interfaces'
import { Grade, IMashovGrade, IMashovStudyGroup } from '../../Interfaces/Mashov'

export interface IGrade {
  title: string
  grade: number
  eventDate: string
  //timestamp: string
  gradeType: Grade
  selected: boolean
}

export class StudyGroupGrades extends StudyGroup {
  readonly groupId: number
  readonly name: string

  private average: number
  private grades: IGrade[] = []

  public addGrade(grade: IMashovGrade) {
    const newGrade = {
      title: grade.gradingEvent,
      grade: grade.grade,
      eventDate: grade.eventDate,
      gradeType: grade.gradeType,
      selected: StudyGroupGrades.calcOnAverage(grade.gradeType),
    }
    if (StudyGroupGrades.calcOnAverage(grade.gradeType) && grade.grade)
      this.Average(grade.grade)

    this.grades.push(newGrade)
  }

  private Average(grade: number) {
    if (this.grades.length > 0 && this.average)
      this.average = (this.average + grade) / 2
    else this.average = grade
  }

  public getFrontObj(): IFrontGradesStudyGroup {
    return {
      name: this.name,
      grades: this.grades,
      average: this.average,
    }
  }

  static calcOnAverage(gradeType: Grade) {
    return gradeType === 'מבחן בכתב'
  }
}

export class StudyGroupGradesBuilder extends StudyGroupsBuilder {
  public studyGroups: Map<number, StudyGroupGrades>
  constructor(studyGroups: IMashovStudyGroup[], grades: IMashovGrade[]) {
    super()
    this.initStudyGroups(studyGroups, StudyGroupGrades)

    for (const grade of grades) {
      const sg = this.studyGroups.get(grade.groupId)
      if (sg != undefined) {
        sg.addGrade(grade)
      }
    }
  }
}
