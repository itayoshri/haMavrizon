import { useModesProvider } from '../../contexts'
import SingleMode from './Mode'

export default function Navbar() {
  const { selectedMode, setMode } = useModesProvider()

  return (
    <div className="flex w-full border-t-[1px] border-zinc-200 dark:border-zinc-800 sticky bg-white dark:bg-black bottom-0">
      <SingleMode
        mode="absences"
        setMode={setMode}
        selected={selectedMode === 'absences'}
      />
      <SingleMode
        mode="grades"
        setMode={setMode}
        selected={selectedMode === 'grades'}
      />
    </div>
  )
}
