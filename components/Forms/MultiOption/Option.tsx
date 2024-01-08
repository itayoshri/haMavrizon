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
      className="bg-white dark:bg-zinc-900 w-full py-4 text-right hover:bg-zinc-200 dark:hover:bg-zinc-800 px-4"
    >
      <span>{name}</span>
    </button>
  )
}
