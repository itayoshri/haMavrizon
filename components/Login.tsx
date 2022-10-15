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
import Input from './Forms/Input'

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
      <Input hint="סמל בית ספר וזה" onChange={setSemel} />
      <Input hint="שם משתמש" onChange={setUsername} />
      <Input hint="סיסמה" onChange={setPassword} />
      <Button onClick={getData}>התחבר</Button>
    </div>
  )
}
