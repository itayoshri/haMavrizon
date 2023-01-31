import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo } from 'react'
import DarkModeSwitch from '../../components/DarkModeSwitch'
import { Calculator } from '../../components/Icons'
import AbsElipse from '../../components/Subject/AbsElipse'
import Grade from '../../components/Subject/grade'
import AverageView from '../../components/Views/AverageView'
import { useGradesProvider } from '../../contexts'
import CalcSubjectAverage from '../../hooks/Grades'
import { dataSample } from '../test'

const AVERAGE = 'ממוצע לפי ציונים מסומנים'
const GRADES = 'ציונים'

export default function SubjectPage() {
  useEffect(() => {
    setStudyGroups(dataSample)
  }, [])

  const router = useRouter()
  const subjectIndex = Number(router.query.subjectIndex)

  const { studyGroupsData: studyGroups, setStudyGroupsData: setStudyGroups } =
    useGradesProvider()

  const average = studyGroups[subjectIndex]
    ? CalcSubjectAverage(studyGroups[subjectIndex].grades)
    : 0

  return studyGroups[subjectIndex] ? (
    <div>
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold px-4 pt-4">
          {studyGroups[subjectIndex].name}
        </h1>
        <AverageView average={average} label={AVERAGE} />
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
