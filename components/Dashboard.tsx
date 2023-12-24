import { IFrontAbsencesStudyGroup } from '../Interfaces'
import SubjectAbsences from './Subject/absences'

export interface AbsencesDashboardProps {
  studyGroups: IFrontAbsencesStudyGroup[]
}

export default function AbsencesDashboard({
  studyGroups,
}: AbsencesDashboardProps) {
  return (
    <div className="flex flex-col w-full px-4 gap-4">
      {studyGroups.map((subject, key) => (
        <SubjectAbsences {...subject} key={key} />
      ))}
    </div>
  )
}
