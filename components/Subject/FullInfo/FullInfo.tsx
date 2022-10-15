import { IFrontStudyGroup } from '../../../Interfaces'
import InfoLine from './InfoLine'

export default function FullInfo({
  name,
  freeAbsences,
  freeAnnualAbsences,
  semesterHours,
  absenceCounter,
  lessonsCount,
}: IFrontStudyGroup) {
  return (
    <div className="flex flex-col">
      <InfoLine title="מספר השיעורים שהתקיימו" info={lessonsCount} />
      <InfoLine title="מספר השיעורים המשוער במחצית" info={semesterHours} />
      <InfoLine title="מספר ההעדרויות" info={absenceCounter} />

      <InfoLine
        title="מספר ההעדרויות ללא הורדה בציון כעת"
        info={freeAbsences}
      />
      <InfoLine
        title="מספר ההעדרויות ללא הורדה בציון במחצית"
        info={freeAnnualAbsences}
      />
    </div>
  )
}
