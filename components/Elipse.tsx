import { useMemo } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import PrecentageCalc from '../hooks/PrecentageCalc'
import { GetPathColor, pathColors } from './Subject'

export interface ElipseProps {
  outOff: number
  amount: number
}

export default function Elipse({ outOff, amount }: ElipseProps) {
  const percentage = PrecentageCalc(amount, outOff)

  return (
    <div className="flex justify-center items-center w-10 h-10">
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: pathColors[GetPathColor(percentage)],
        })}
      />
    </div>
  )
}