import axios from 'axios'

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
    method: 'post',
    url: MASHOV_LOGIN_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }

  const response = await await axios(config)

  // Auth cookie
  const auth = response.headers['set-cookie'][1]
  const token = auth.slice(0, 672)
  const domain = 'domain=web.mashov.info'
  const path = '/'

  // Student info requests
  const studentId = response.data.credential.userId

  return {
    authCookie: `${token};domain=${domain};path=/;`,
    studentId: studentId,
  }
}
