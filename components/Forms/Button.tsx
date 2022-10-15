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
      className={`bg-sky-500 text-white font-bold py-3 px-6 rounded-xl`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
