export interface MessageProps {
  message: string
}

export default function Message({ message }: MessageProps) {
  return (
    <div className="flex absolute top-3 py-1 rounded-xl font-medium text-red-600 justify-center items-center w-64 bg-white border-2 border-red-600">
      <a>{message}</a>
    </div>
  )
}
