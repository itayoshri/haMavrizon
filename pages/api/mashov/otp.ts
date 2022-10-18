import type { NextApiRequest, NextApiResponse } from 'next'
import { MashovRequestOTP } from '../../../utils/Mashov/login'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { semel, username, cellphone } = req.query

  MashovRequestOTP({
    semel: semel as string,
    username: username as string,
    cellphone: cellphone as string,
  })

  res.status(200)
}
