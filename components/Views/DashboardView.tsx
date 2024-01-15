import { useGradesProvider } from '../../contexts'
import Footer from '../Footer'
import SubjectAbsences from '../Subject/absences'

const ALL_SUBJECTS = 'כל המקצועות'

export default function DashboardView() {
  const { absencesStudyGroups } = useGradesProvider()
  return (
    <div className="flex flex-col pt-4 px-4 h-full w-screen gap-4 items-start sm:w-full m-0 p-0 justify-center">
      <h1 className="text-black dark:text-white text-2xl font-semibold">
        {ALL_SUBJECTS}
      </h1>
      <div className="flex flex-col w-full gap-4">
        {absencesStudyGroups.map((subject, key) => (
          <SubjectAbsences {...subject} key={key} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
