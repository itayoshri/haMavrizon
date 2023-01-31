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
    <div className="flex w-full flex-col py-3 px-5 border-b-[1px] gap-4 dark:text-white border-zinc-200 dark:border-zinc-800">
      <div className="flex w-full justify-between items-center">
        <div className="flex truncate items-center gap-3">
          <Selected selected={selected} setSelected={setSelected} />
          <Link href={`/grades/${index}`} passHref>
            <div className="flex gap-1 items-center cursor-pointer grow">
              <h1 className="font-medium">{name}</h1>
            </div>
          </Link>
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
      </div>
    </div>
  )
}
