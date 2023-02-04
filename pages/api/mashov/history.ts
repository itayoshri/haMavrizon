import type { NextApiRequest, NextApiResponse } from 'next'
import MashovLogin from '../../../utils/Mashov/login'
import { fetchDataSource } from '../../../utils/Mashov/datasource'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { semel, username, password } = req.query

  const { authCookie, studentId, xCsrfToken } = await MashovLogin({
    semel: semel as string,
    username: username as string,
    password: password as string,
  })
  const auth = { authCookie, studentId, xCsrfToken }

  const behaveEvents = await fetchDataSource('lessonHistory', auth)

  res.status(200).json(behaveEvents)
}
