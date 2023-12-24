import { useState } from 'react'
import { IFrontAbsencesStudyGroup } from '../../Interfaces'
import AbsElipse from '../Elipse/AbsElipse'
import { Expand, ForwardRTL } from '../Icons'
import FullInfo from './FullInfo/FullInfo'

export default function SubjectAbsences({
  name,
  freeAbsences,
  freeAnnualAbsences,
  semesterHours,
  absenceCounter,
  lessonsCount,
}: IFrontAbsencesStudyGroup) {
  const [opened, setOpened] = useState(false)
  return (
    <div className="flex w-full rounded-xl flex-col py-4 px-4 justify-between border-2 gap-4 dark:text-white border-zinc-300 dark:border-zinc-800">
      <div className="flex w-full justify-between items-center">
        <div
          className="flex gap-1 items-center cursor-pointer pl-4 overflow-hidden grow"
          onClick={() => setOpened(!opened)}
        >
          <h1 className="font-medium truncate">{name}</h1>
        </div>
        <div className="flex gap-3">
          {/* currently */}
          <AbsElipse
            label={freeAbsences}
            lessonsCount={lessonsCount}
            absenceCounter={absenceCounter}
            clickable
          />
          {/* semesterial */}
          <AbsElipse
            label={freeAnnualAbsences}
            lessonsCount={semesterHours}
            absenceCounter={absenceCounter}
            clickable
          />
          {opened ? <Expand width={24} /> : <ForwardRTL width={24} />}
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
