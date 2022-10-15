import axios from 'axios'
import Link from 'next/link'
import {
  useState,
  useMemo,
  SetStateAction,
  Dispatch,
  useEffect,
  useCallback,
} from 'react'
import { IFrontStudyGroup } from '../Interfaces'
import Button from './Forms/Button'

export interface LoginProps {
  setData: Dispatch<SetStateAction<IFrontStudyGroup[]>>
}

export default function Login({ setData }: LoginProps) {
  const [semel, setSemel] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const link = useMemo(() => {
    return `/api/studygroups?semel=${semel}&username=${username}&password=${password}`
  }, [password, semel, username])
  const getData = useCallback(() => {
    axios.get(link).then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }, [link, setData])
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <input
        placeholder="סמל בית ספר וזה"
        className="bg-zinc-200 p-2 px-4 rounded-lg placeholder:text-black text-lg text-right"
        onChange={(e) => setSemel(Number(e.target.value))}
      />

      <input
        placeholder="שם משתמש"
        className="bg-zinc-200 p-2 px-4 rounded-lg placeholder:text-black text-lg text-right"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="סיסמה"
        className="bg-zinc-200 py-2 px-4 rounded-lg placeholder:text-black text-lg text-right"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={getData}>התחבר</Button>
    </div>
  )
}
