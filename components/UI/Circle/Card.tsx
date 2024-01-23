import PrecentageCalc, { GetColor } from '../../../hooks/Subject'
import { Close } from '../../Icons'
import Circle, { textColors } from '.'

interface CircleCardProps {
  free: number
  lessonsCount: number
  absenceCounter: number
  setOpened(bool): unknown
}

const LABELS = {
  green: { color: 'ירוק', label: 'עד 15%, ללא הורדה בציון' },
  yellow: { color: 'צהוב', label: '15-30%, הורדה בציון' },
  red: { color: 'אדום', label: '30% ויותר, ללא ציון' },
}

export default function CircleCard({
  free,
  lessonsCount,
  absenceCounter,
  setOpened,
}: CircleCardProps) {
  const percentage = PrecentageCalc(absenceCounter, lessonsCount)
  const color = GetColor(percentage)
  const label = LABELS[color]

  return (
    <div className="w-max h-max  z-50 bg-white flex dark:bg-neutral-900 absolute shadow-lg  p-4 left-0 top-0 rounded-lg items-center gap-3">
      <div onClick={() => setOpened(false)} className="absolute top-2 left-2">
        <Close width={16} />
      </div>
      <Circle
        label={free}
        lessonsCount={lessonsCount}
        absenceCounter={absenceCounter}
      />
      <div className="flex gap-1">
        <a className={`flex font-bold ${textColors[color]}`}>{label.color} -</a>
        <a>{label.label}</a>
      </div>
    </div>
  )
}
