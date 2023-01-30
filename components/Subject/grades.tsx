import { useMemo } from 'react'
import { IFrontGradesStudyGroup } from '../../Interfaces'
import { Expand, ForwardRTL } from '../Icons'
import AbsElipse from './AbsElipse'
import FullInfo from './FullInfo/FullInfo'

export default function SubjectGrades({
  name,
  grades,
  average,
}: IFrontGradesStudyGroup) {
  const averagee = useMemo(() => {}, [])
  return (
    <div className="flex w-full flex-col py-3 px-5 border-b-[1px] gap-4 dark:text-white border-zinc-200 dark:border-zinc-800">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-1 items-center cursor-pointer grow">
          <h1 className="font-medium">{name}</h1>
        </div>
        <div className="flex gap-4">
          <AbsElipse
            label={average}
            lessonsCount={100}
            absenceCounter={average}
            type="grade"
          />
        </div>
      </div>
    </div>
  )
}
