import axios from 'axios'
import { useState, useMemo, SetStateAction, Dispatch, useCallback } from 'react'
import { IFrontStudyGroup } from '../Interfaces'
import Button from './Forms/Button'
import Input from './Forms/Input'

const SIGN_IN = 'התחברות'
const LOGIN_BY_SMS = 'התחברות באמצעות מסרון'
const LOGIN_BY_PASSWORD = 'התחברות באמצעות סיסמה'

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

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <Input hint="סמל בית ספר וזה" onChange={setSemel} />
      <Input hint="שם משתמש" onChange={setUsername} />
      {viaSMS ? (
        <>
          {/* TODO: Refactor /*/}
          {req ? (
            <Input hint="סיסמה" onChange={setPassword} key={0} />
          ) : (
            <Input hint="מספר טלפון" onChange={setCellphone} key={1} />
          )}
          <Button onClick={req ? getData : requestSMS}>{SIGN_IN}</Button>
        </>
      ) : (
        <>
          <Input hint="סיסמה" onChange={setPassword} password={true} />
          <Button onClick={getData}>{SIGN_IN}</Button>
        </>
      )}
      <Button onClick={() => setViaSMS(!viaSMS)}>
        {viaSMS ? LOGIN_BY_PASSWORD : LOGIN_BY_SMS}
      </Button>
    </div>
  )
}
