// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import MashovLogin from '../../../utils/Mashov/login'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { semel, username, password } = req.query

  const { authCookie, studentId } = await MashovLogin({
    semel: semel as string,
    username: username as string,
    password: password as string,
  })

  res.status(200).json({ authCookie, studentId })
}
