export interface InfoLineProps {
  title: string
  info: string | number
}

export default function DataRow({ title, info }: InfoLineProps) {
  return (
    <div className="flex roe flex-col justify-between items-center">
      <div className="flex gap-2">
        <h1 className="font-semibold">{title}</h1>
      </div>
      <a>{info}</a>
    </div>
  )
}
