import { StudyGroup, StudyGroupsBuilder } from '.'
import { Grade, IMashovGrade, IMashovStudyGroup } from '../../Interfaces/Mashov'

interface IGrade {
  grade: number
  eventDate: string
  //timestamp: string
  gradeType: Grade
}

export class StudyGroupGrades extends StudyGroup {
  readonly groupId: number
  readonly name: string

  private average: number
  private grades: IGrade[]

  public addGrade(grade: IMashovGrade) {
    const newGrade = {
      grade: grade.grade,
      eventDate: grade.eventDate,
      gradeType: grade.gradeType,
    }
    this.Average(grade.grade)

    this.grades.push(newGrade)
  }

  private Average(grade: number) {
    if (this.grades.length > 0) this.average = (this.average + grade) / 2
    else this.average = grade
  }

  public getFrontObj() {
    return {
      name: this.name,
      grades: this.grades,
      average: this.average,
    }
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
