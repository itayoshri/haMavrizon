import Option from './Option'

export interface option {
  name: string
  semel: number
}

export interface OptionsProps {
  options: option[]
  onClick(semel: number): unknown
  setSelected(label: string): unknown
  opened: boolean
  setOpened(bool: boolean): unknown
}

export default function Options({
  options,
  onClick,
  setSelected,
  opened,
  setOpened,
}: OptionsProps) {
  return opened ? (
    <div className="flex absolute bg-white dark:text-white dark:bg-[#424242] flex-col max-h-64 w-full overflow-y-scroll shadow-mashov_box">
      {options.map((option, key) => (
        <Option
          name={`${option.name} (${option.semel})`}
          semel={option.semel}
          onClick={onClick}
          key={key}
          setOpened={setOpened}
          setSelected={setSelected}
        />
      ))}
    </div>
  ) : null
}
