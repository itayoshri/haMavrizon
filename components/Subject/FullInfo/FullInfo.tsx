import { IFrontAbsencesStudyGroup } from '../../../Interfaces'
import { FreeAbsence, Later, Now, Out } from '../../Icons'
import InfoLine from './InfoLine'

const LESSONS_COUNT = 'מספר השיעורים שהתקיימו'
const SEMESTERIAL_LESSONS = 'מספר השיעורים המשוער במחצית'
const NUM_OF_ABSENCES = 'מספר ההעדרויות'
const FREE_ABSENCES = 'העדרויות ללא הורדה בציון שנותרו כעת'
const SEMESTERIAL_FREE_ABSENCES = 'העדרויות ללא הורדה בציון שנותרו במחצית'

export default function FullInfo({
  freeAbsences,
  freeAnnualAbsences,
  semesterHours,
  absenceCounter,
  lessonsCount,
}: IFrontAbsencesStudyGroup) {
  return (
    <div className="flex flex-col">
      <InfoLine
        title={LESSONS_COUNT}
        info={lessonsCount}
        icon={<Now width={20} />}
      />
      <InfoLine
        title={SEMESTERIAL_LESSONS}
        info={semesterHours}
        icon={<Later width={20} />}
        predicted
      />
      <InfoLine
        title={NUM_OF_ABSENCES}
        info={absenceCounter}
        icon={<Out width={20} />}
      />

      <InfoLine
        title={FREE_ABSENCES}
        info={freeAbsences}
        icon={<FreeAbsence width={20} />}
      />
      <InfoLine
        title={SEMESTERIAL_FREE_ABSENCES}
        info={freeAnnualAbsences}
        icon={<FreeAbsence width={20} />}
        predicted
      />
    </div>
  )
}
