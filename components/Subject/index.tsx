import { IFrontStudyGroup } from '../../Interfaces'
import Elipse from '../Elipse'
import AbsElipse from './AbsElipse'

export default function Subject({
  name,
  freeAbsences,
  freeAnnualAbsences,
  semesterHours,
  absenceCounter,
  lessonsCount,
}: IFrontStudyGroup) {
  return (
    <div className="flex justify-between items-center w-full py-3 px-5 border-b-[1px] border-zinc-200">
      <h1 className="font-medium">{name}</h1>
      <div className="flex gap-4">
        {/* currently */}
        <AbsElipse
          free={freeAbsences}
          lessonsCount={lessonsCount}
          absenceCounter={absenceCounter}
        />
        {/* semesterial */}
        <AbsElipse
          free={freeAnnualAbsences}
          lessonsCount={semesterHours}
          absenceCounter={absenceCounter}
        />
      </div>
    </div>
  )
}
