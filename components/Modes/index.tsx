import { useState } from 'react'
import { Modes } from '../../pages'
import SingleMode from './Mode'

export default function ModesSwitcher() {
  const [mode, setMode] = useState('absences' as Modes)

  return (
    <div className="flex w-full border-t-[1px] border-gray-300">
      <SingleMode
        mode="absences"
        setMode={setMode}
        selected={mode === 'absences'}
      />
      <SingleMode
        mode="grades"
        setMode={setMode}
        selected={mode === 'grades'}
      />
    </div>
  )
}
