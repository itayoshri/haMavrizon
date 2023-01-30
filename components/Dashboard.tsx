import { IFrontAbsencesStudyGroup } from '../Interfaces'
import SubjectAbsences from './Subject/absences'
import TableCategories from './TableCategories'

export interface DashboardProps {
  subjects: IFrontAbsencesStudyGroup[]
}

export default function AbsencesDashboard({ subjects }: DashboardProps) {
  return (
    <div className="flex flex-col w-full">
      <TableCategories />
      {subjects.map((subject, key) => (
        <SubjectAbsences {...subject} key={key} />
      ))}
    </div>
  )
}

/*
export function GradesDashboard({ subjects }: DashboardProps) {
  return (
    <div className="flex flex-col w-full">
      {subjects.map((subject, key) => (
        <SubjectGrades {...subject} key={key} />
      ))}
    </div>
  )
}
*/
