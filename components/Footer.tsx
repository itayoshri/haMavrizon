import Link from 'next/link'
import { GitHub } from './Icons'

const COPY_RIGHT = 'Itay Oshri 2022 ©'
const GITHUB_LINK = 'https://github.com/itayoshri/haMavrizon'

export default function Footer() {
  return (
    <div className="flex justify-between w-full p-4 py-6">
      <Link href={GITHUB_LINK}>
        <a>
          <GitHub height={24} />
        </a>
      </Link>
      {COPY_RIGHT}
    </div>
  )
}
