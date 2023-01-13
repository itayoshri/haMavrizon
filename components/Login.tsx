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
import MashovButton from './Forms/MashovButton'
import Input from './Forms/Input'
import Semel from './Forms/Semel'
import LoadingBar from './LoadingBar'
import Message from './Message'

const SIGN_IN = 'כניסה'
const LOGIN_BY_SMS = 'כניסה באמצעות מסרון (SMS)'
const LOGIN_BY_PASSWORD = 'כניסה באמצעות סיסמה'

const USERNAME_OR_ID = 'שם משתמש/ ת.ז.'
const PASSWORD_MASHOV = 'סיסמה (משו"ב)'
const PASSWORD = 'סיסמה'
const CELLPHONE = 'טלפון נייד'

const MESSAGE = 'שם המשתמש או הסיסמה שגויים'

export interface LoginProps {
  setData: Dispatch<SetStateAction<IFrontStudyGroup[]>>
}

export default function Login({ setData }: LoginProps) {
  const [semel, setSemel] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cellphone, setCellphone] = useState()
  const [viaSMS, setViaSMS] = useState(false)
  const [req, setReq] = useState(false)
  const [options, setOptions] = useState([])
  const [showError, setShowError] = useState(true)
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    axios
      .get(link)
      .then((res) => {
        setData(res.data)
      })
      .catch(() => {
        setShowError(true)
        setLoading(false)
      })
  }, [link, setData])

  const requestSMS = useCallback(() => {
    axios.post(OTPLink)
    setReq(true)
  }, [OTPLink])

  const onEnter = req || !viaSMS ? getData : requestSMS

  useEffect(() => {
    setShowError(false)
  }, [username, password, cellphone])

  return options.length > 0 ? (
    <div className="flex items-center justify-center flex-col w-64 gap-4">
      {showError ? <Message message={MESSAGE} /> : null}
      <Semel setSemel={setSemel} options={options} loading={loading} />
      <Input
        hint={USERNAME_OR_ID}
        onChange={setUsername}
        loading={loading}
        inputType="number"
        input={username}
        onEnter={onEnter}
        autoComplete="username"
      />
      {req || !viaSMS ? (
        <>
          <Input
            hint={viaSMS ? PASSWORD : PASSWORD_MASHOV}
            onChange={setPassword}
            key={viaSMS ? 0 : 2}
            loading={loading}
            inputType="password"
            input={password}
            onEnter={onEnter}
            autoComplete={viaSMS ? 'one-time-code' : 'password'}
          />
          <MashovButton onClick={getData} loading={loading}>
            {SIGN_IN}
          </MashovButton>
        </>
      ) : (
        <>
          <Input
            hint={CELLPHONE}
            onChange={setCellphone}
            key={1}
            loading={loading}
            inputType="number"
            input={cellphone}
            onEnter={onEnter}
            autoComplete="tel-national"
          />
          <MashovButton onClick={requestSMS}>{SIGN_IN}</MashovButton>
        </>
      )}
      <MashovButton
        onClick={() => setViaSMS(!viaSMS)}
        className="!bg-[#e6f0eb] !text-black"
      >
        {viaSMS ? LOGIN_BY_PASSWORD : LOGIN_BY_SMS}
      </MashovButton>
    </div>
  ) : null
}
