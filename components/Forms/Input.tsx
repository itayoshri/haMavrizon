import { ChangeEvent } from 'react'

export type InputType = 'password' | 'number' | 'text' | 'otp'
export type AutoComplete =
  | 'password'
  | 'one-time-code'
  | 'username'
  | 'on'
  | 'tel-national'

export interface InputProps {
  hint: string
  onChange(newInput: any): unknown
  onEnter?(): unknown
  input?: string | number
  loading?: boolean
  inputType: InputType
  autoComplete: AutoComplete
}

export default function Input({
  hint,
  onEnter = () => {},
  onChange,
  input = '',
  loading = false,
  inputType,
  autoComplete,
}: InputProps) {
  return (
    <input
      placeholder={hint}
      className={`${
        loading ? 'bg-[#0000001f]' : 'bg-transparent'
      } py-2 px-4 border-[1px] w-full rounded-lg border-zinc-300 focus:border-blue-500 text-right focus:ring-0 outline-none duration-200
      dark:border-zinc-400 dark:text-white dark:focus:border-blue-400
      placeholder:transition-all dark:placeholder:text-zinc-300 placeholder:text-[#0009] focus:placeholder:text-blue-500 dark:focus:placeholder:text-blue-400
      `}
      onChange={(e) => {
        onChange(e.target.value)
      }}
      type={inputType}
      value={input}
      onKeyPress={(e) => {
        if (e.key === 'Enter') onEnter()
      }}
      autoComplete={autoComplete}
    />
  )
}
