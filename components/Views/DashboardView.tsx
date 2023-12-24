import AbsencesDashboard from '../Dashboard'
import Popup from '../Forms/Popup'
import Logo from '../Logo'
//import elipsesfullinfo_sample from '../../public/elipsesfullinfo_sample.png'
import { useCallback, useState } from 'react'
import Table from '../tables'
import { useGradesProvider, useModesProvider } from '../../contexts'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SubjectAbsences from '../Subject/absences'

/*const POPUP = {
  title: 'חדש!',
  description: 'ניתן לקבל כעת מידע מורחב בלחיצה על העיגולים',
  buttonLabel: 'הבנתי',
  image: elipsesfullinfo_sample,
}*/
interface DashboardViewProps {
  showed: boolean
  setShowed(val: any): unknown
}

export default function DashboardView({
  showed,
  setShowed,
}: DashboardViewProps) {
  const [opened, setOpened] = useState(!showed)
  const { selectedMode } = useModesProvider()
  const { gradesStudyGroups, setGradesStudyGroups, absencesStudyGroups } =
    useGradesProvider()

  const setSelected = useCallback(
    (index: number) => {
      gradesStudyGroups[index].selected = !gradesStudyGroups[index].selected
      setGradesStudyGroups((prev) => {
        return [...prev]
      })
    },
    [gradesStudyGroups, setGradesStudyGroups]
  )

  return (
    <div className="flex flex-col pt-20 px-4 h-full w-screen items-start sm:w-full m-0 p-0 justify-center">
      <h1 className="text-black dark:text-white">כל המקצועות</h1>
      <div className="flex flex-col w-full gap-4">
        {absencesStudyGroups.map((subject, key) => (
          <SubjectAbsences {...subject} key={key} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
