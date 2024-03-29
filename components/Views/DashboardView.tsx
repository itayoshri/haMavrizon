import AbsencesDashboard, { GradesDashboard } from '../Dashboard'
import Popup from '../Forms/Popup'
import Logo from '../Logo'
//import elipsesfullinfo_sample from '../../public/elipsesfullinfo_sample.png'
import { useCallback, useState } from 'react'
import Table from '../tables'
import { useGradesProvider, useModesProvider } from '../../contexts'
import Navbar from '../Navbar'
import Footer from '../Footer'

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
    <div className="flex flex-col h-full w-screen sm:w-full m-0 p-0 justify-center items-center">
      <Logo />

      <AbsencesDashboard studyGroups={absencesStudyGroups} />

      {/*}  <GradesDashboard
          studyGroups={gradesStudyGroups}
          setSelected={setSelected}
        />
      
      {opened ? (
        <Popup
          title={POPUP.title}
          description={POPUP.description}
          onClick={() => {
            setOpened(false)
            setShowed(true)
          }}
          buttonLabel={POPUP.buttonLabel}
          image={POPUP.image}
        />
      ) : null}*/}
      <Footer />
    </div>
  )
}
