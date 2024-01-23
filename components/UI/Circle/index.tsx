import { useState, useRef, useEffect } from 'react'
import PrecentageCalc, { GetColor } from '../../../hooks/Subject'
import ProgressCircle, { For } from './ProgressCircle'
import CircleCard from './Card'
import Label from '../label'

export interface CircleProps {
  label: number
  lessonsCount: number
  absenceCounter: number
  clickable?: boolean
  type?: For
  blue?: boolean
}

export const textColors = {
  green: 'text-[#34C759]',
  yellow: 'text-[#FF9500]',
  red: 'text-[#FF3B30]',
}

export default function Circle({
  label,
  lessonsCount,
  absenceCounter,
  clickable = false,
  type = 'absences',
  blue = false,
}: CircleProps) {
  const percentage = PrecentageCalc(absenceCounter, lessonsCount)
  const [opened, setOpened] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        opened &&
        ref.current &&
        !(ref.current as HTMLElement).contains(e.target)
      ) {
        setOpened(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [opened])

  return (
    <div className="relative">
      <div
        className={`w-fit h-fit flex justify-center items-center ${
          !opened ? 'cursor-pointer' : ''
        }`}
        onClick={() => (!opened ? setOpened(true) : null)}
        ref={ref}
      >
        <ProgressCircle
          amount={absenceCounter}
          outOff={lessonsCount}
          animate={!clickable}
        />
        {
          /* label */
          <span
            className={`absolute
        } ${blue ? 'text-blue-500' : textColors[GetColor(percentage)]}`}
          >
            {/* free absences, percentage or grade */}
            <a className=" font-medium">
              {Math.floor(clickable ? label : 100 - percentage)}
            </a>
            {
              /* percentage symbol */
              !clickable && !(type === 'grade') ? (
                <a className="text-xs">%</a>
              ) : null
            }
          </span>
        }
      </div>
      {clickable && opened ? (
        <CircleCard
          free={label}
          lessonsCount={lessonsCount}
          absenceCounter={absenceCounter}
          setOpened={setOpened}
        />
      ) : null}
    </div>
  )
}
