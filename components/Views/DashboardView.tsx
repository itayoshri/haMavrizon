import Dashboard, { DashboardProps } from '../Dashboard'
import Popup from '../Forms/Popup'
import Logo from '../Logo'
import elipsesfullinfo_sample from '../../public/elipsesfullinfo_sample.png'
import { useState } from 'react'

const POPUP = {
  title: 'חדש!',
  description: 'ניתן לקבל כעת מידע מורחב בלחיצה על העיגולים',
  buttonLabel: 'הבנתי',
  image: elipsesfullinfo_sample,
}
interface DashboardViewProps {
  showed: boolean
  setShowed(val: any): unknown
}

export default function DashboardView({
  subjects,
  showed,
  setShowed,
}: DashboardProps & DashboardViewProps) {
  const [opened, setOpened] = useState(!showed)

  return (
    <div className="flex flex-col h-full w-screen sm:w-full m-0 p-0 justify-center items-center">
      <Logo />
      <Dashboard subjects={subjects} />
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
