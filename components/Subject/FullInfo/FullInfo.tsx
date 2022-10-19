import { IFrontStudyGroup } from '../../../Interfaces'
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
}: IFrontStudyGroup) {
  return (
    <div className="flex flex-col">
      <InfoLine title={LESSONS_COUNT} info={lessonsCount} />
      <InfoLine title={SEMESTERIAL_LESSONS} info={semesterHours} />
      <InfoLine title={NUM_OF_ABSENCES} info={absenceCounter} />

      <InfoLine title={FREE_ABSENCES} info={freeAbsences} />
      <InfoLine title={SEMESTERIAL_FREE_ABSENCES} info={freeAnnualAbsences} />
    </div>
  )
}
