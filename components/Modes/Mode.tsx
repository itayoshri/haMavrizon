import { Modes } from '../../pages'
import { Calculator } from '../Icons'

const ModeLabels = {
  absences: 'העדרויות',
  grades: 'ציונים',
}
export interface ModeProps {
  mode: Modes
  setMode(mode: Modes): unknown
  selected: boolean
}

export default function SingleMode({ mode, setMode, selected }: ModeProps) {
  return (
    <button
      className={`flex flex-col items-center justify-center w-full h-16 gap-1 font-medium ${
        selected ? 'text-blue-500' : 'text-gray-500'
      }`}
      onClick={() => setMode(mode)}
    >
      <Calculator width={24} />
      <h1>{ModeLabels[mode]}</h1>
    </button>
  )
}
