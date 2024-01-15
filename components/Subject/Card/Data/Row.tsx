export interface InfoLineProps {
  title: string
  icon?: JSX.Element
  info: string | number
  predicted?: boolean
}

export default function DataRow({
  title,
  info,
  icon,
  predicted = false,
}: InfoLineProps) {
  return (
    <div
      className={`flex justify-between items-center ${
        predicted ? 'text-sky-500' : ''
      }`}
    >
      <div className="flex gap-2">
        {icon ? icon : <div className="w-5" />}
        <h1>{title}</h1>
      </div>
      <a>{info}</a>
    </div>
  )
}
