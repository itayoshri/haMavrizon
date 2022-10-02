// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const MASHOV_LOGIN_URL = 'https://web.mashov.info/api/login'

type Data = {
  name: string
}

export default function handler(
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

  axios(config).then((res) => {
    console.log(res.headers)
  })

  res.status(200).json({ name: 'John Doe' })
}
