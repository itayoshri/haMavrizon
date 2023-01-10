import { useEffect, useRef, useState } from 'react'
import PrecentageCalc, { GetColor } from '../../hooks/Subject'
import Elipse from '../Elipse'
import ElipseFullInfo from './ElipseFullInfo'

export interface AbsElipseProps {
  free: number
  lessonsCount: number
  absenceCounter: number
  clickable?: boolean
}

export const textColors = {
  green: 'text-[#34C759]',
  yellow: 'text-[#FF9500]',
  red: 'text-[#FF3B30]',
}

export default function AbsElipse({
  free,
  lessonsCount,
  absenceCounter,
  clickable = false,
}: AbsElipseProps) {
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
    <div className=" relative">
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
        />
        {
          <span
            className={`absolute
        } ${textColors[GetColor(percentage)]}`}
          >
            <a className=" font-medium">
              {clickable ? free : `${100 - Math.floor(percentage)}`}
            </a>
            {!clickable ? <a className="text-xs">%</a> : null}
          </span>
        }
      </div>
      {clickable && opened ? (
        <ElipseFullInfo
          free={free}
          lessonsCount={lessonsCount}
          absenceCounter={absenceCounter}
          setOpened={setOpened}
        />
      ) : null}
    </div>
  )
}
