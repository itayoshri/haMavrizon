import axios from 'axios'
import {
  useState,
  useMemo,
  SetStateAction,
  Dispatch,
  useCallback,
  useEffect,
} from 'react'
import { IFrontStudyGroup } from '../Interfaces'
import Button from './Forms/Button'
import Input from './Forms/Input'
import Semel from './Forms/Semel'

const SIGN_IN = 'כניסה'
const LOGIN_BY_SMS = 'כניסה באמצעות מסרון (SMS)'
const LOGIN_BY_PASSWORD = 'כניסה באמצעות סיסמה'

const USERNAME_OR_ID = 'שם משתמש/ ת.ז.'
const PASSWORD_MASHOV = 'סיסמה (משו"ב)'
const PASSWORD = 'סיסמה'
const CELLPHONE = 'טלפון נייד'

export interface LoginProps {
  setData: Dispatch<SetStateAction<IFrontStudyGroup[]>>
}

export default function Login({ setData }: LoginProps) {
  const [semel, setSemel] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cellphone, setCellphone] = useState(0)
  const [viaSMS, setViaSMS] = useState(false)
  const [req, setReq] = useState(false)
  const [options, setOptions] = useState([])

  useEffect(() => {
    axios.get('/api/mashov/schools').then((res) => {
      setOptions(res.data[0])
    })
  }, [])

  const link = useMemo(() => {
    return `/api/studygroups?semel=${semel}&username=${username}&password=${password}`
  }, [password, semel, username])

  const OTPLink = useMemo(() => {
    return `/api/mashov/otp?semel=${semel}&username=${username}&cellphone=${cellphone}`
  }, [cellphone, semel, username])

  const getData = useCallback(() => {
    axios.get(link).then((res) => {
      setData(res.data)
    })
  }, [link, setData])

  const requestSMS = useCallback(() => {
    axios.post(OTPLink)
    setReq(true)
  }, [OTPLink])

  return options.length > 0 ? (
    <div className="flex items-center justify-center flex-col w-64 gap-4">
      <Semel setSemel={setSemel} options={options} />
      <Input hint={USERNAME_OR_ID} onChange={setUsername} />
      {req || !viaSMS ? (
        <>
          <Input
            hint={viaSMS ? PASSWORD : PASSWORD_MASHOV}
            onChange={setPassword}
            password
            key={0}
          />
          <Button onClick={getData}>{SIGN_IN}</Button>
        </>
      ) : (
        <>
          <Input hint={CELLPHONE} onChange={setCellphone} key={1} />
          <Button onClick={requestSMS}>{SIGN_IN}</Button>
        </>
      )}
      <Button
        onClick={() => setViaSMS(!viaSMS)}
        className="!bg-[#e6f0eb] !text-black"
      >
        {viaSMS ? LOGIN_BY_PASSWORD : LOGIN_BY_SMS}
      </Button>
    </div>
  ) : null
}
