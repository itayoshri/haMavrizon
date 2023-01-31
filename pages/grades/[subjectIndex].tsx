import { useRouter } from 'next/router'
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
    <div>
      <button onClick={() => router.back()}>234234</button>
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold px-4 pt-4">
          {gradesStudyGroups[subjectIndex].name}
        </h1>
        <AverageView average={average} label={AVERAGE} />
      </div>
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
