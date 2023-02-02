import { IFrontGradesStudyGroup } from '../Interfaces'
import { IGrade } from '../utils/StudyGroups/grades'

export default function CalcSubjectAverage(grades: IGrade[]) {
  let sum = 0
  let counter = 0
  for (const grade of grades) {
    if (grade.selected) {
      counter++
      sum += grade.grade
    }
  }
  return counter > 0 ? Math.floor(sum / counter) : 0
}
export function CalcSubjectsAverage(subjects: IFrontGradesStudyGroup[]) {
  let sum = 0
  let counter = 0
  for (const subject of subjects) {
    if (subject.selected) {
      counter++
      sum += CalcSubjectAverage(subject.grades)
    }
  }
  return counter > 0 ? Math.floor(sum / counter) : 0
}
