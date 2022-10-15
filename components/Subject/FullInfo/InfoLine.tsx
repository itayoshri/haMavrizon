export interface InfoLineProps {
  title: string
  info: string | number
}

export default function InfoLine({ title, info }: InfoLineProps) {
  return (
    <div className="flex justify-between items-center">
      <h1>{title}</h1>
      <a>{info}</a>
    </div>
  )
}
