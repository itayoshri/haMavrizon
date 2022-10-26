import Dashboard, { DashboardProps } from '../Dashboard'
import Logo from '../Logo'

export default function DashboardView({ subjects }: DashboardProps) {
  return (
    <div className="flex flex-col h-full w-screen sm:w-full m-0 p-0 justify-center items-center">
      <Logo />
      <Dashboard subjects={subjects} />
    </div>
  )
}
