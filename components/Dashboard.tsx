import { IFrontAbsencesStudyGroup } from '../Interfaces'
import SubjectCard from './Subject/Card'

export interface AbsencesDashboardProps {
  studyGroups: IFrontAbsencesStudyGroup[]
}

export default function AbsencesDashboard({
  studyGroups,
}: AbsencesDashboardProps) {
  return (
    <div className="flex flex-col w-full px-4 gap-4">
      {studyGroups.map((subject, key) => (
        <SubjectCard {...subject} key={key} />
      ))}
    </div>
  )
}
