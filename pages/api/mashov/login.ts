// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import MashovLogin from '../../../utils/Mashov/login'
import { fetchDataSource } from '../../../utils/Mashov/dataSource'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { semel, username, password } = req.query

  const { authCookie, studentId, xCsrfToken } = await MashovLogin({
    semel: semel as string,
    username: username as string,
    password: password as string,
  })

  res
    .status(200)
    .json(
      await fetchDataSource('groups', { authCookie, studentId, xCsrfToken })
    )
}
