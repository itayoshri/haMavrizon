import { Wrapper } from '../types'

export interface ButtonProps {
  onClick(): unknown
}

export default function Button({
  onClick = () => {},
  children,
}: ButtonProps & Wrapper) {
  return (
    <button
      className={`bg-[#106030] font-mashov text-sm text-white w-full py-3 px-6 rounded-full`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
