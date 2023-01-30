import { useEffect, useRef, useState } from 'react'
import PrecentageCalc, { GetColor } from '../../../hooks/Subject'
import Elipse, { For } from '../../Elipse'
import ElipseFullInfo from '../ElipseFullInfo'

export interface AbsElipseProps {
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

export default function AbsElipse({
  label,
  lessonsCount,
  absenceCounter,
  clickable = false,
  type = 'absences',
  blue = false,
}: AbsElipseProps) {
  const percentage =
    type === 'absences' ? PrecentageCalc(absenceCounter, lessonsCount) : label
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
        <Elipse
          amount={absenceCounter}
          outOff={lessonsCount}
          animate={!clickable}
          type={type}
          blue={blue}
        />
        {
          /* label */
          <span
            className={`absolute
        } ${blue ? 'text-blue-500' : textColors[GetColor(percentage, type)]}`}
          >
            {/* free absences, percentage or grade */}
            <a className=" font-medium">
              {Math.floor(
                clickable || type === 'grade' ? label : 100 - percentage
              )}
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
        <ElipseFullInfo
          free={label}
          lessonsCount={lessonsCount}
          absenceCounter={absenceCounter}
          setOpened={setOpened}
        />
      ) : null}
    </div>
  )
}
