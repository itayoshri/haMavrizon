import { Wrapper } from '../types'

interface ButtonProps {
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
      className={`bg-sky-500 w-fit h-fit py-2 px-6 rounded-md font-bold text-white text-sm ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
