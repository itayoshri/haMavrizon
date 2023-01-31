import { useModesProvider } from '../../contexts'
import SingleMode from './Mode'

export default function ModesSwitcher() {
  const { selectedMode, setMode } = useModesProvider()

  return (
    <div className="flex w-full border-t-[1px] border-gray-300 fixed bg-white bottom-0">
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
