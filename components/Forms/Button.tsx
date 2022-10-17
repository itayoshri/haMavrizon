import { Wrapper } from '../types'

export interface ButtonProps {
  onClick(): unknown
  className?: string
}

export default function Button({
  onClick = () => {},
  children,
  className = '',
}: ButtonProps & Wrapper) {
  return (
    <button
      className={`bg-[#106030] font-mashov text-sm text-white w-full py-2 px-6 rounded-full shadow-md ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
