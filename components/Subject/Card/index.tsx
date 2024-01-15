import { useState } from 'react'
import { IFrontAbsencesStudyGroup } from '../../../Interfaces'
import CardData from './Data'
import SubjectCardVisual from './Visual'
import SubjectCardTitle from './Title'

export default function SubjectCard({
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
        <SubjectCardTitle title={name} setOpened={setOpened} />
        <SubjectCardVisual
          freeAbsences={freeAbsences}
          lessonsCount={lessonsCount}
          absenceCounter={absenceCounter}
          freeAnnualAbsences={freeAnnualAbsences}
          semesterHours={semesterHours}
          opened={opened}
        />
      </div>
      {opened ? (
        <CardData
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
