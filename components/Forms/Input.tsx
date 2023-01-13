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
        loading ? 'bg-[#0000001f]' : 'bg-white'
      } p-1 px-3 border-[1px] w-full dark:!bg-transparent border-[#e0e0e0] font-mashov placeholder:text-[#0009] dark:placeholder:text-[#ffffffb3] dark:text-white text-right focus:ring-0 outline-none focus:placeholder:text-[#3f51b5] dark:focus:placeholder:text-[#9fa8da] placeholder:duration-500 placeholder:transition-all`}
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
