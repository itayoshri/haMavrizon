import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import Button from './Button'

interface PopupProps {
  title: string
  description: string
  image: StaticImageData
  onClick(): unknown
  buttonLabel: string
}

export default function Popup({
  title,
  description,
  image,
  onClick,
  buttonLabel,
}: PopupProps) {
  return (
    <div className="bg-black/70 h-full w-full fixed top-0">
      <div className="flex gap-4 p-3 pt-9 fixed left-0 right-0 top-0 bottom-0 m-auto rounded-xl flex-col justify-center items-center w-[calc(100%_-_32px)] h-fit bg-white">
        <div className="px-2">
          <Image src={image} alt={title} />
        </div>
        <div className="flex gap-1 items-center flex-col">
          <h1 className="text-2xl font-bold text-green-500">{title}</h1>
          <h2 className="font-medium">{description}</h2>
        </div>
        <Button onClick={() => onClick()} className="!w-full">
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}
