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
