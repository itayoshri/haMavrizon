interface ElipseLabelProps {
  text: string
}

export default function ElipseLabel({ text }: ElipseLabelProps) {
  return <a>{text}</a>
}
