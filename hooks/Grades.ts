import { IGrade, StudyGroupGrades } from '../utils/StudyGroups/grades'

export default function CalcAverage(grades: IGrade[]) {
  let average = 0
  for (const grade of grades) {
    if (grade.selected)
      if (average > 0) average = (average + grade.grade) / 2
      else average = grade.grade
  }
  return average
}
