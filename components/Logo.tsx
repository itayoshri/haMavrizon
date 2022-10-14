import Image from 'next/image'
import logo from '../public/logo.png'

export default function Logo() {
  return (
    <div className="flex w-60 py-4">
      <Image src={logo} alt={'לוגו'} />
    </div>
  )
}
