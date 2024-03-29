import AbsElipse from '../Elipse/AbsElipse'
import { Calculator } from '../Icons'

export interface AverageViewProps {
  average: number
  label: string
}

export default function AverageView({ label, average }: AverageViewProps) {
  return (
    <div className="flex font-medium px-5 justify-between items-center text-blue-500">
      <div className="flex gap-1 items-center">
        <Calculator className="text-blue-500" width={26} />
        <a>{label}</a>
      </div>
      <AbsElipse
        label={average}
        lessonsCount={100}
        absenceCounter={average}
        type="grade"
        blue
      />
    </div>
  )
}
