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
      } w-full px-6 h-11 rounded-xl 
      dark:bg-zinc-900 dark:text-white
      ${className}`}
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
