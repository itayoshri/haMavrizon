import Circle from '.'

interface TitledCircleProps {
  title: string
  label: number
  lessonsCount: number
  absenceCounter: number
}

export default function TitledCircle({
  title,
  label,
  lessonsCount,
  absenceCounter,
}: TitledCircleProps) {
  return (
    <div className="flex items-center gap-2">
      <a className="font-medium">{title}</a>
      <Circle
        label={label}
        lessonsCount={lessonsCount}
        absenceCounter={absenceCounter}
        clickable
      />
    </div>
  )
}
