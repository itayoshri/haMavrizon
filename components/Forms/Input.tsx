import { ChangeEvent } from 'react'

export interface InputProps {
  hint: string
  onChange(newInput: any): unknown
  password?: boolean
  loading?: boolean
}

export default function Input({
  hint,
  onChange,
  password,
  loading = false,
}: InputProps) {
  return (
    <input
      placeholder={hint}
      className={`${
        loading ? 'bg-[#0000001f]' : 'bg-white'
      } p-1 px-3 border-[1px] w-full border-[#e0e0e0] font-mashov placeholder:text-[#0009] text-right focus:ring-0 outline-none focus:placeholder:text-[#3f51b5] placeholder:duration-500 placeholder:transition-all`}
      onChange={(e) => {
        onChange(e.target.value)
      }}
      type={password ? 'password' : 'number'}
    />
  )
}

export function SearchInput({
  hint,
  setInput,
  input,
  loading = false,
}: Partial<InputProps> & { setInput(string: string): unknown; input: string }) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <input
      placeholder={hint}
      className={`${
        loading ? 'bg-[#0000001f]' : 'bg-white'
      } p-1 px-3 border-[1px] w-full border-[#e0e0e0] font-mashov placeholder:text-[#0009] text-right focus:ring-0 outline-none focus:placeholder:text-[#3f51b5] placeholder:duration-500 placeholder:transition-all truncate`}
      onChange={handleChange}
      type={'text'}
      value={input}
    />
  )
}
