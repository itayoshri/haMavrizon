import { NextApiRequest, NextApiResponse } from 'next'
import { RelevantWeekDaysCounter } from '../../../utils/RelevantWeekDaysCounter'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const calendar = new RelevantWeekDaysCounter()

  res
    .status(200)
    .json(calendar.GetDaysOfWeekCounter([1, 9, 2022], [30, 1, 2023]))
}
