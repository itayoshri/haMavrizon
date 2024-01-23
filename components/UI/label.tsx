interface LabelProps {
  label: string
}

export default function Label({ label }: LabelProps) {
  return (
    <div className="absolute bg-black text-white px-1 text-xs -right-5">
      <a className="font-semibold">{label}</a>
    </div>
  )
}
