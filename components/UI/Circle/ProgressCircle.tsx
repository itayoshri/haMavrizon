import { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useThemeProvider } from '../../../contexts'
import PrecentageCalc, { GetColor, pathColors } from '../../../hooks/Subject'

export type For = 'grade' | 'absences'

export interface ProgressCircleProps {
  outOff: number
  amount: number
  animate?: boolean
}

export default function ProgressCircle({
  outOff,
  amount,
  animate = false,
}: ProgressCircleProps) {
  const percentage = PrecentageCalc(amount, outOff)
  const { darkMode } = useThemeProvider()
  const [value, setValue] = useState(0)
  useEffect(() => {
    setValue(percentage)
  }, [percentage])

  return (
    <div className="flex justify-center items-center w-11 h-11">
      {/*<a className="absolute text-[10px] font-medium -right-2 top-0 bg-black text-white rounded-sm px-1 pt-[1px]">
        NOW
  </a>*/}
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
