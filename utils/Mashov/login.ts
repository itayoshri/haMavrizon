import axios from 'axios'
import { IMashovLoginRes } from '../../Interfaces/Mashov'

const MASHOV_LOGIN_URL = 'https://web.mashov.info/api/login'

export default async function MashovLogin({
  password,
  semel,
  username,
}: {
  password: string
  semel: string
  username: string
}) {
  const data = JSON.stringify({
    appName: 'info.mashov.students',
    password: password,
    semel: Number(semel),
    username: username,
    year: 2023,
  })

  const config = {
    url: MASHOV_LOGIN_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }

  const response = await axios.post<any, IMashovLoginRes>(
    MASHOV_LOGIN_URL,
    config
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
