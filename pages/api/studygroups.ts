// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import MashovLogin from '../../utils/Mashov/login'
import { fetchDataSource } from '../../utils/Mashov/datasource'
import { StudyGroupsBuilder } from '../../utils/StudyGroups'
import {
  IBehaveEvent,
  IMashovStudyGroup,
  IMashovLessonsCounter,
} from '../../Interfaces/Mashov'
import { IFrontStudyGroup } from '../../Interfaces'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IFrontStudyGroup[]>
) {
  const { semel, username, password } = req.query

  const { authCookie, studentId, xCsrfToken } = await MashovLogin({
    semel: semel as string,
    username: username as string,
    password: password as string,
  })
  const auth = { authCookie, studentId, xCsrfToken }

  const studyGroups = await fetchDataSource('groups', auth)
  const behaveEvents = await fetchDataSource('behave', auth)
  const lessonCounter = await fetchDataSource('lessonsCount', auth)

  const StudyGroups = new StudyGroupsBuilder(
    studyGroups as IMashovStudyGroup[],
    behaveEvents as IBehaveEvent[],
    lessonCounter as IMashovLessonsCounter[]
  )

  res.status(200).json(StudyGroups.getStudyGroups())
}
