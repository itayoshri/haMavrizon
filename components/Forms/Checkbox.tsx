import { Check } from '../Icons'

export interface SelectedProps {
  selected: boolean
  setSelected(): unknown
}

export default function Checkbox({ selected, setSelected }: SelectedProps) {
  return (
    <button
      className={`rounded-md shrink-0 p-1 w-[26px] h-[26px] ${
        selected ? 'bg-blue-500' : 'border-[2px] border-gray-400'
      }`}
      onClick={() => setSelected()}
    >
      {selected ? <Check className="text-white" /> : null}
    </button>
  )
}
