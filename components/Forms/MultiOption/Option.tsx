import { option } from './Options'

interface OptionProps extends option {
  onClick(index: number): unknown
  setOpened(bool: boolean): unknown
  setSelected(lable: string): unknown
}

export default function Option({
  name,
  semel,
  onClick,
  setOpened,
  setSelected,
}: OptionProps) {
  return (
    <button
      onClick={() => {
        onClick(semel)
        setSelected(name)
        setOpened(false)
      }}
      className="bg-white w-full py-[0.9rem] text-right hover:bg-[rgba(0,0,0,.04)] font-mashov pr-4"
    >
      <span>{name}</span>
    </button>
  )
}
