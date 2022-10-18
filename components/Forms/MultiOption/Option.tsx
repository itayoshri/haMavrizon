import { option } from './Options'

interface OptionProps extends option {
  onClick(index: number): unknown
  setOpened(bool: boolean): unknown
  setSelected(lable: string): unknown
}

export default function Option({
  label,
  semel,
  onClick,
  setOpened,
  setSelected,
}: OptionProps) {
  return (
    <div
      onClick={() => {
        onClick(semel)
        setOpened(false)
        setSelected(label)
      }}
      className="bg-white w-full py-[0.9rem] hover:bg-[rgba(0,0,0,.04)] font-mashov pr-4"
    >
      <span>{label}</span>
    </div>
  )
}
