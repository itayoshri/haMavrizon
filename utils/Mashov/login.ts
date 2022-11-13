import axios from 'axios'
import { IMashovLoginRes } from '../../Interfaces/Mashov'

const MASHOV_LOGIN_URL = 'http://0.0.0.0:3001/api' //process.env.LOGIN_URL as string //'https://ha-mavrizon-server.vercel.app/api'
const MASHOV_OTP_LOGIN_URL = process.env.OTP_LOGIN_URL as string //'https://web.mashov.info/api/user/otp'

export default async function MashovLogin({
  password,
  semel,
  username,
}: {
  password: string
  semel: string
  username: string
}) {
  const data = {
    appName: 'info.mashov.students',
    password: password,
    semel: Number(semel),
    username: username,
    year: 2023,
  }

  const response = await axios.post<any, IMashovLoginRes>(
    MASHOV_LOGIN_URL,
    data
  )

  // Auth cookie
  const authCookie = response.headers['set-cookie'].slice(0, 672)

  const xCsrfToken = response.headers['x-csrf-token']

  // Student info requests
  const studentId = response.data.credential.userId

  return {
    authCookie,
    studentId,
    xCsrfToken,
  }
}

export function MashovRequestOTP({
  cellphone,
  semel,
  username,
}: {
  cellphone: string
  semel: string
  username: string
}) {
  const data = {
    cellphone: cellphone,
    semel: Number(semel),
    username: username,
  }

  axios.post(MASHOV_OTP_LOGIN_URL, data)
}
