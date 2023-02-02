import { useRouter } from 'next/router'
import { BackRTL } from '../../components/Icons'
import Grade from '../../components/Subject/grade'
import AverageView from '../../components/Views/AverageView'
import { useGradesProvider } from '../../contexts'
import CalcSubjectAverage from '../../hooks/Grades'

const AVERAGE = 'ממוצע לפי ציונים מסומנים'
const GRADES = 'ציונים'

export default function SubjectPage() {
  const router = useRouter()
  const subjectIndex = Number(router.query.subjectIndex)

  const { gradesStudyGroups, setGradesStudyGroups } = useGradesProvider()

  const average = gradesStudyGroups[subjectIndex]
    ? CalcSubjectAverage(gradesStudyGroups[subjectIndex].grades)
    : 0

  return gradesStudyGroups[subjectIndex] ? (
    <div className="flex flex-col gap-2 text-black dark:text-white py-2">
      <h1 className="flex items-center gap-2 text-xl font-semibold px-4 pt-4">
        <button onClick={() => router.back()}>
          <BackRTL width={20} />
        </button>

        {gradesStudyGroups[subjectIndex].name}
      </h1>
      <AverageView average={average} label={AVERAGE} />
      <div>
        <h1 className="font-bold px-4">{GRADES}</h1>
        {gradesStudyGroups[subjectIndex].grades.map((grade, index) => {
          return (
            <Grade
              setSelected={() => {
                gradesStudyGroups[subjectIndex].grades[index].selected =
                  !gradesStudyGroups[subjectIndex].grades[index].selected
                setGradesStudyGroups((prev) => {
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
