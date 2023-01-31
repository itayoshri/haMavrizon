import { Check } from '../Icons'

export interface SelectedProps {
  selected: boolean
  setSelected(): unknown
}

export default function Selected({ selected, setSelected }: SelectedProps) {
  return (
    <button
      className={`rounded-md shrink-0 p-1 w-7 h-7 ${
        selected ? 'bg-blue-500' : 'bg-white border-[2px] border-gray-400'
      }`}
      onClick={() => setSelected()}
    >
      {selected ? <Check className="text-white" /> : null}
    </button>
  )
}
