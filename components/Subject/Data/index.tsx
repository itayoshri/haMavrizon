import { IFrontAbsencesStudyGroup } from '../../../Interfaces'
import { FreeAbsence, Later, Now, Out } from '../../Icons'
import DataRow from './Row'

const LESSONS_COUNT = 'שיעורים שהתקיימו'
const SEMESTERIAL_LESSONS = 'שיעורים במחצית (משוער)'
const NUM_OF_ABSENCES = 'מספר ההעדרויות'
const FREE_ABSENCES = 'העדרויות ללא הורדה בציון שנותרו כעת'
const SEMESTERIAL_FREE_ABSENCES = 'העדרויות ללא הורדה בציון שנותרו במחצית'

export default function CardData({
  freeAbsences,
  freeAnnualAbsences,
  semesterHours,
  absenceCounter,
  lessonsCount,
}: IFrontAbsencesStudyGroup) {
  return (
    <div className="flex flex-col">
      <DataRow
        title={LESSONS_COUNT}
        info={lessonsCount}
        icon={<Now width={20} />}
      />
      <DataRow
        title={SEMESTERIAL_LESSONS}
        info={semesterHours}
        icon={<Later width={20} />}
        predicted
      />
      <DataRow
        title={NUM_OF_ABSENCES}
        info={absenceCounter}
        icon={<Out width={20} />}
      />

      <DataRow
        title={FREE_ABSENCES}
        info={freeAbsences}
        icon={<FreeAbsence width={20} />}
      />
      <DataRow
        title={SEMESTERIAL_FREE_ABSENCES}
        info={freeAnnualAbsences}
        icon={<FreeAbsence width={20} />}
        predicted
      />
    </div>
  )
}
