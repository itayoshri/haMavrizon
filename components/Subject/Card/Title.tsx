interface SubjectCardTitleProps {
  title: string
  setOpened
}

export default function SubjectCardTitle({
  title,
  setOpened,
}: SubjectCardTitleProps) {
  return (
    <div
      className="flex gap-1 items-center cursor-pointer pl-4 overflow-hidden grow"
      onClick={() => setOpened((value) => !value)}
    >
      <h1 className="font-medium truncate">{title}</h1>
    </div>
  )
}
