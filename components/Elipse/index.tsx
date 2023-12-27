import { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useThemeProvider } from '../../contexts'
import PrecentageCalc, { GetColor, pathColors } from '../../hooks/Subject'

export type For = 'grade' | 'absences'

export interface ElipseProps {
  outOff: number
  amount: number
  animate?: boolean
  type?: For
  blue?: boolean
}

export default function Elipse({
  outOff,
  amount,
  animate = false,
  type = 'absences',
  blue = false,
}: ElipseProps) {
  const percentage =
    type === 'absences' ? PrecentageCalc(amount, outOff) : amount
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
        value={type === 'grade' ? amount : animate ? value : percentage}
        styles={buildStyles({
          pathColor: blue
            ? pathColors['blue']
            : pathColors[GetColor(percentage, type)],
          trailColor: darkMode ? '#525252' : '',
        })}
      />
    </div>
  )
}
