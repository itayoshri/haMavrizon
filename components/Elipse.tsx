import { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useProvider } from '../contexts'
import PrecentageCalc, { GetColor, pathColors } from '../hooks/Subject'

export type For = 'grade' | 'absences'

export interface ElipseProps {
  outOff: number
  amount: number
  animate?: boolean
  type?: For
}

export default function Elipse({
  outOff,
  amount,
  animate = false,
  type = 'absences',
}: ElipseProps) {
  const percentage =
    type === 'absences' ? PrecentageCalc(amount, outOff) : amount
  const { darkMode } = useProvider()
  const [value, setValue] = useState(0)
  useEffect(() => {
    setValue(percentage)
  }, [percentage])

  return (
    <div className="flex justify-center items-center w-10 h-10">
      <CircularProgressbar
        value={type === 'grade' ? amount : animate ? value : percentage}
        styles={buildStyles({
          pathColor: pathColors[GetColor(percentage, type)],
          trailColor: darkMode ? '#525252' : '',
        })}
      />
    </div>
  )
}
