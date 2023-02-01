import { useModesProvider } from '../../contexts'
import { Grade, FilledFreeAbsence, FilledGrade, FreeAbsence } from '../Icons'
import SingleMode from './Mode'

export default function Navbar() {
  const { selectedMode, setMode } = useModesProvider()

  return (
    <div className="flex w-full border-t-[1px] border-zinc-200 dark:border-zinc-800 sticky bg-white dark:bg-black bottom-0">
      <SingleMode
        mode="absences"
        setMode={setMode}
        icon={<FreeAbsence width={24} />}
        filledIcon={<FilledFreeAbsence width={24} />}
        selected={selectedMode === 'absences'}
      />
      <SingleMode
        mode="grades"
        setMode={setMode}
        icon={<Grade width={24} />}
        filledIcon={<FilledGrade width={24} />}
        selected={selectedMode === 'grades'}
      />
    </div>
  )
}
