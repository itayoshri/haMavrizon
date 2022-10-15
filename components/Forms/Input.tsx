export interface InputProps {
  hint: string
  onChange(newInput: any): unknown
  password?: boolean
}

export default function Input({ hint, onChange, password }: InputProps) {
  return (
    <input
      placeholder={hint}
      className="bg-zinc-200 p-2 px-4 rounded-lg placeholder:text-black text-lg text-right"
      onChange={(e) => onChange(Number(e.target.value))}
    />
  )
}
