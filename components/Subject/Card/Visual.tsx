import { Expand, ForwardRTL } from '../../Icons'
import Circle from '../../UI/Circle'

interface SubjectCardVisual {
  freeAbsences: number
  lessonsCount: number
  absenceCounter: number
  freeAnnualAbsences: number
  semesterHours: number
  opened: boolean
}

export default function SubjectCardVisual({
  freeAbsences,
  lessonsCount,
  absenceCounter,
  freeAnnualAbsences,
  semesterHours,
  opened,
}: SubjectCardVisual) {
  return (
    <div className="flex gap-3">
      {/* currently */}
      <Circle
        label={freeAbsences}
        lessonsCount={lessonsCount}
        absenceCounter={absenceCounter}
        clickable
      />
      {/* semesterial */}
      <Circle
        label={freeAnnualAbsences}
        lessonsCount={semesterHours}
        absenceCounter={absenceCounter}
        clickable
      />
      {opened ? <Expand width={24} /> : <ForwardRTL width={24} />}
    </div>
  )
}
