import { CalcSubjectsAverage } from '../hooks/Grades'
import { IFrontAbsencesStudyGroup, IFrontGradesStudyGroup } from '../Interfaces'
import SubjectAbsences from './Subject/absences'
import SubjectGrades from './Subject/grades'
import TableCategories from './TableCategories'
import AverageView from './Views/AverageView'

const AVERAGE = 'ממוצע מקצועות מסומנים'
export interface AbsencesDashboardProps {
  subjects: IFrontAbsencesStudyGroup[]
}

export interface GradesDashboardProps {
  subjects: IFrontGradesStudyGroup[]
}

export default function AbsencesDashboard({
  subjects,
}: AbsencesDashboardProps) {
  return (
    <div className="flex flex-col w-full">
      <TableCategories />
      {subjects.map((subject, key) => (
        <SubjectAbsences {...subject} key={key} />
      ))}
    </div>
  )
}

export function GradesDashboard({ subjects }: GradesDashboardProps) {
  const average = CalcSubjectsAverage(subjects)

  return (
    <div className="flex flex-col w-full">
      <AverageView average={average} label={AVERAGE} />
      {subjects.map((subject, key) => (
        <SubjectGrades {...subject} key={key} index={key} />
      ))}
    </div>
  )
}
