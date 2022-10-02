// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const MASHOV_LOGIN_URL = 'https://web.mashov.info/api/login'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { semel, username, password } = req.query

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
  const studentId = response.data.userId
  const STUDENT_URL = `https://web.mashov.info/api/students/${studentId}`

  console.log(response.data)

  res.status(200).json(token)
}
