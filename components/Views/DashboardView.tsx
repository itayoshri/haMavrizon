import AbsencesDashboard, {
  AbsencesDashboardProps,
  GradesDashboard,
  GradesDashboardProps,
} from '../Dashboard'
import Popup from '../Forms/Popup'
import Logo from '../Logo'
import elipsesfullinfo_sample from '../../public/elipsesfullinfo_sample.png'
import { useState } from 'react'
import { Mode } from 'fs'
import { Modes } from '../../pages'
import Table from '../tables'
import {
  IFrontAbsencesStudyGroup,
  IFrontGradesStudyGroup,
} from '../../Interfaces'
import { useModesProvider } from '../../contexts'

const POPUP = {
  title: 'חדש!',
  description: 'ניתן לקבל כעת מידע מורחב בלחיצה על העיגולים',
  buttonLabel: 'הבנתי',
  image: elipsesfullinfo_sample,
}
interface DashboardViewProps {
  absencesStudyGroups: IFrontAbsencesStudyGroup[]
  gradesStudyGroups: IFrontGradesStudyGroup[]
  showed: boolean
  setShowed(val: any): unknown
  setSelected(index: number): unknown
}

export default function DashboardView({
  absencesStudyGroups,
  gradesStudyGroups,
  showed,
  setShowed,
  setSelected,
}: DashboardViewProps) {
  const [opened, setOpened] = useState(!showed)
  const { selectedMode, setMode } = useModesProvider()

  return (
    <div className="flex flex-col h-full w-screen sm:w-full m-0 p-0 justify-center items-center">
      <Logo />
      <Table mode="absences" />
      {selectedMode === 'absences' ? (
        <AbsencesDashboard studyGroups={absencesStudyGroups} />
      ) : (
        <GradesDashboard
          studyGroups={gradesStudyGroups}
          setSelected={(index) => setSelected(index)}
        />
      )}
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
      ) : null}
    </div>
  )
}
