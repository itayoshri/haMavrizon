import LoadingBar from '../LoadingBar'
import { Wrapper } from '../types'

export interface ButtonProps {
  onClick(): unknown
  className?: string
  loading?: boolean
}

export default function MashovButton({
  onClick = () => {},
  children,
  className = '',
  loading = false, //-[#106030]
}: ButtonProps & Wrapper) {
  return (
    <button
      className={`${
        loading ? 'bg-[#0000001f] text-black/0' : 'bg-black text-white'
      } text-sm  w-full px-6 h-9 rounded-xl ${className}`}
      onClick={() => onClick()}
    >
      {loading ? (
        <>
          <LoadingBar />
        </>
      ) : (
        children
      )}
    </button>
  )
}
