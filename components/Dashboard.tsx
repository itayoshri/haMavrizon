import { useGradesProvider } from '../contexts'
import { CalcSubjectsAverage } from '../hooks/Grades'
import { IFrontAbsencesStudyGroup, IFrontGradesStudyGroup } from '../Interfaces'
import SubjectAbsences from './Subject/absences'
import SubjectGrades from './Subject/grades'
import Table from './tables'
import AverageView from './Views/AverageView'

const AVERAGE = 'ממוצע מקצועות מסומנים'
export interface AbsencesDashboardProps {
  studyGroups: IFrontAbsencesStudyGroup[]
}

export interface GradesDashboardProps {
  studyGroups: IFrontGradesStudyGroup[]
  setSelected(index: number): unknown
}

export default function AbsencesDashboard({
  studyGroups,
}: AbsencesDashboardProps) {
  return (
    <div className="flex flex-col w-full">
      <Table />
      {studyGroups.map((subject, key) => (
        <SubjectAbsences {...subject} key={key} />
      ))}
    </div>
  )
}

export function GradesDashboard({
  studyGroups,
  setSelected,
}: GradesDashboardProps) {
  const average = CalcSubjectsAverage(studyGroups)

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <AverageView average={average} label={AVERAGE} />
        <Table />
        {studyGroups.map((subject, key) => (
          <SubjectGrades
            {...subject}
            key={key}
            index={key}
            setSelected={() => setSelected(key)}
          />
        ))}
      </div>
    </div>
  )
}
