import PrecentageCalc, { GetColor } from '../../hooks/Subject'
import Elipse from '../Elipse'

export interface AbsElipseProps {
  free: number
  lessonsCount: number
  absenceCounter: number
}

const textColors = {
  green: 'text-[#34C759]',
  yellow: 'text-[#FF9500]',
  red: 'text-[#FF3B30]',
}

export default function AbsElipse({
  free,
  lessonsCount,
  absenceCounter,
}: AbsElipseProps) {
  const percentage = PrecentageCalc(absenceCounter, lessonsCount)

  return (
    <div className="w-fit h-fit flex justify-center items-center">
      <Elipse amount={absenceCounter} outOff={lessonsCount} />
      <a className={`absolute font-medium ${textColors[GetColor(percentage)]}`}>
        {free}
      </a>
    </div>
  )
}
