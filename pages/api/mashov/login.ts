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

  const auth = await (await axios(config)).headers['set-cookie'][1]
  const token = auth.slice(0, 672)

  res.status(200).json(token)
}
