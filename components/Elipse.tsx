import { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useProvider } from '../contexts'
import PrecentageCalc, { GetColor, pathColors } from '../hooks/Subject'

export interface ElipseProps {
  outOff: number
  amount: number
  animate?: boolean
}

export default function Elipse({
  outOff,
  amount,
  animate = false,
}: ElipseProps) {
  const percentage = PrecentageCalc(amount, outOff)
  const { darkMode } = useProvider()
  const [value, setValue] = useState(0)
  useEffect(() => {
    setValue(percentage)
  }, [percentage])

  return (
    <div className="flex justify-center items-center w-10 h-10">
      <CircularProgressbar
        value={animate ? value : percentage}
        styles={buildStyles({
          pathColor: pathColors[GetColor(percentage)],
          trailColor: darkMode ? '#525252' : '',
        })}
      />
    </div>
  )
}
