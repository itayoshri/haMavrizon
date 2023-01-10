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
  loading = false,
}: ButtonProps & Wrapper) {
  return (
    <button
      className={`${
        loading ? 'bg-[#0000001f] text-black/0' : 'bg-[#106030] text-white'
      } font-mashov text-sm  w-full h-9 px-6 rounded-full shadow-mashov ${className}`}
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
