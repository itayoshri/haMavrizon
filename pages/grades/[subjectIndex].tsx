import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo } from 'react'
import DarkModeSwitch from '../../components/DarkModeSwitch'
import { Calculator } from '../../components/Icons'
import AbsElipse from '../../components/Subject/AbsElipse'
import Grade from '../../components/Subject/grade'
import { useGradesProvider } from '../../contexts'
import CalcAverage from '../../hooks/Grades'
import { data } from '../test'

const AVERAGE = 'ממוצע לפי ציונים מסומנים'
const GRADES = 'ציונים'

export default function SubjectPage() {
  useEffect(() => {
    setStudyGroups(data)
  }, [])

  const router = useRouter()
  const subjectIndex = Number(router.query.subjectIndex)

  const { studyGroups, setStudyGroups } = useGradesProvider()

  const average = studyGroups[subjectIndex]
    ? CalcAverage(studyGroups[subjectIndex].grades)
    : 0

  return studyGroups[subjectIndex] ? (
    <div>
      <div className="flex flex-col p-4">
        <h1 className="text-xl font-semibold">
          {studyGroups[subjectIndex].name}
        </h1>
        <div className="flex font-medium justify-between items-center text-blue-500">
          <div className="flex gap-1 items-center">
            <Calculator className="text-blue-500" width={26} />
            <a>{AVERAGE}</a>
          </div>
          <AbsElipse
            label={average}
            lessonsCount={100}
            absenceCounter={average}
            type="grade"
            blue
          />
        </div>
      </div>
      <div>
        <h1 className="font-bold px-4">{GRADES}</h1>
        {studyGroups[subjectIndex].grades.map((grade, index) => {
          return (
            <Grade
              setSelected={() => {
                studyGroups[subjectIndex].grades[index].selected =
                  !studyGroups[subjectIndex].grades[index].selected
                setStudyGroups((prev) => {
                  return [...prev]
                })
              }}
              {...grade}
              key={index}
            />
          )
        })}
      </div>
    </div>
  ) : null
}
