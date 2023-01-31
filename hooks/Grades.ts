import { IFrontGradesStudyGroup } from '../Interfaces'
import { IGrade, StudyGroupGrades } from '../utils/StudyGroups/grades'

export default function CalcSubjectAverage(grades: IGrade[]) {
  let average = 0
  for (const grade of grades) {
    if (grade.selected)
      if (average > 0) average = (average + grade.grade) / 2
      else average = grade.grade
  }
  return Math.floor(average)
}

export function CalcSubjectsAverage(subjects: IFrontGradesStudyGroup[]) {
  let average = 0
  for (const subject of subjects) {
    if (subject.selected)
      average = (CalcSubjectAverage(subject.grades) + average) / 2
  }
  return average
}
