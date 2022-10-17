// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import MashovLogin, { MashovRequestOTP } from '../../../utils/Mashov/login'
import { fetchDataSource } from '../../../utils/Mashov/datasource'

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
