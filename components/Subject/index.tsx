import { useState } from 'react'
import { IFrontStudyGroup } from '../../Interfaces'
import { Expand, ForwardRTL } from '../Icons'
import AbsElipse from './AbsElipse'
import FullInfo from './FullInfo/FullInfo'

export default function Subject({
  name,
  freeAbsences,
  freeAnnualAbsences,
  semesterHours,
  absenceCounter,
  lessonsCount,
}: IFrontStudyGroup) {
  const [opened, setOpened] = useState(false)
  return (
    <div className="flex w-full flex-col py-3 px-5 border-b-[1px] gap-4 border-zinc-200">
      <div
        className="flex w-full justify-between items-center"
        onClick={() => setOpened(!opened)}
      >
        <div className="flex gap-1 items-center">
          {opened ? <Expand width={24} /> : <ForwardRTL width={24} />}
          <h1 className="font-medium">{name}</h1>
        </div>
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
      {opened ? (
        <FullInfo
          {...{
            name,
            freeAbsences,
            freeAnnualAbsences,
            semesterHours,
            absenceCounter,
            lessonsCount,
          }}
        />
      ) : null}
    </div>
  )
}
