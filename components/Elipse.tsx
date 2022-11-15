import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useProvider } from '../contexts'
import PrecentageCalc, { GetColor, pathColors } from '../hooks/Subject'

export interface ElipseProps {
  outOff: number
  amount: number
}

export default function Elipse({ outOff, amount }: ElipseProps) {
  const percentage = PrecentageCalc(amount, outOff)
  const { darkMode } = useProvider()

  return (
    <div className="flex justify-center items-center w-10 h-10">
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: pathColors[GetColor(percentage)],
          trailColor: darkMode ? '#525252' : '',
        })}
      />
    </div>
  )
}
