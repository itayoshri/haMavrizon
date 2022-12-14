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
    <div className="flex w-full flex-col py-3 px-5 border-b-[1px] gap-4 dark:text-white border-zinc-200 dark:border-zinc-800">
      <div className="flex w-full justify-between items-center">
        <div
          className="flex gap-1 items-center cursor-pointer grow"
          onClick={() => setOpened(!opened)}
        >
          {opened ? <Expand width={24} /> : <ForwardRTL width={24} />}
          <h1 className="font-medium">{name}</h1>
        </div>
        <div className="flex gap-4">
          {/* currently */}
          <AbsElipse
            free={freeAbsences}
            lessonsCount={lessonsCount}
            absenceCounter={absenceCounter}
            clickable
          />
          {/* semesterial */}
          <AbsElipse
            free={freeAnnualAbsences}
            lessonsCount={semesterHours}
            absenceCounter={absenceCounter}
            clickable
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
