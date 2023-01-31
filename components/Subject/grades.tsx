import Link from 'next/link'
import { useMemo } from 'react'
import CalcSubjectAverage from '../../hooks/Grades'
import { IFrontGradesStudyGroup } from '../../Interfaces'
import AbsElipse from '../Elipse/AbsElipse'
import Selected from '../Forms/Selected'
import { Expand, ForwardRTL } from '../Icons'
import FullInfo from './FullInfo/FullInfo'

export interface SubjectGradesProps extends IFrontGradesStudyGroup {
  index: number
  setSelected(): unknown
}

export default function SubjectGrades({
  name,
  grades,
  index,
  selected,
  setSelected,
}: SubjectGradesProps) {
  const average = CalcSubjectAverage(grades)

  return (
    <div className="flex w-full py-3 px-5 border-b-[1px] border-zinc-200 dark:border-zinc-800 items-center gap-3">
      <Selected selected={selected} setSelected={setSelected} />
      <Link href={`/grades/${index}`}>
        <a className="flex w-full justify-between cursor-pointer gap-4 dark:text-white">
          <div className="flex gap-1 items-center grow">
            <h1 className="font-medium">{name}</h1>
          </div>
          <div className="flex gap-2">
            <AbsElipse
              label={average}
              lessonsCount={100}
              absenceCounter={average}
              type="grade"
              blue
            />
            <ForwardRTL width={24} />
          </div>
        </a>
      </Link>
    </div>
  )
}
