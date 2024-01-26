import { IFrontAbsencesStudyGroup } from '../../../../Interfaces'
import { FreeAbsence, Later, Now, Out } from '../../../Icons'
import Circle from '../../../UI/Circle'
import TitledCircle from '../../../UI/Circle/Titled'
import DataRow from './Row'

const LESSONS_COUNT = 'שיעורים שהתקיימו'
const SEMESTERIAL_LESSONS = 'שיעורים במחצית (משוער)'
const FREE_ABSENCES = 'העדרויות ללא הורדה בציון שנותרו'
const NOW = 'כעת'
const SEMESTER = 'מחצית'

export default function CardData({
  freeAbsences,
  freeAnnualAbsences,
  semesterHours,
  absenceCounter,
  lessonsCount,
}: IFrontAbsencesStudyGroup) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <DataRow title={LESSONS_COUNT} info={lessonsCount} />
        <DataRow title={SEMESTERIAL_LESSONS} info={semesterHours} />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="font-semibold">{FREE_ABSENCES}</h1>
        <div className="flex gap-4 items-center">
          <TitledCircle
            title={NOW}
            label={freeAnnualAbsences}
            lessonsCount={semesterHours}
            absenceCounter={absenceCounter}
          />
          <div className="bg-black w-[2px] h-8" />
          <TitledCircle
            title={SEMESTER}
            label={freeAbsences}
            lessonsCount={lessonsCount}
            absenceCounter={absenceCounter}
          />
        </div>
      </div>
    </div>
  )
}
