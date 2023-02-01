import { ReactElement, ReactNode } from 'react'
import { Modes } from '../../pages'
import { Calculator } from '../Icons'
import { Icon } from '../Icons/svgFactory'

const ModeLabels = {
  absences: 'העדרויות',
  grades: 'ציונים',
}
export interface ModeProps {
  mode: Modes
  setMode(mode: Modes): unknown
  selected: boolean
  icon: ReactElement
  filledIcon: ReactElement
}

export default function SingleMode({
  mode,
  setMode,
  selected,
  icon,
  filledIcon,
}: ModeProps) {
  return (
    <button
      className={`flex flex-col items-center justify-center w-full h-16 font-medium ${
        selected ? 'text-blue-500' : 'text-gray-500'
      }`}
      onClick={() => setMode(mode)}
    >
      {selected ? filledIcon : icon}
      <h1>{ModeLabels[mode]}</h1>
    </button>
  )
}
