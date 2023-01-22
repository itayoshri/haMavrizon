import type { NextApiRequest, NextApiResponse } from 'next'
import MashovLogin from '../../../utils/Mashov/login'
import { fetchDataSource } from '../../../utils/Mashov/datasource'
import { StudyGroupsAbsencesBuilder } from '../../../utils/StudyGroups/absences'
import {
  IBehaveEvent,
  IMashovStudyGroup,
  IMashovLessonsCounter,
  IMashovTT,
} from '../../../Interfaces/Mashov'
import { IFrontStudyGroup } from '../../../Interfaces'

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
  const timetable = await fetchDataSource('timetable', auth)

  const StudyGroups = new StudyGroupsAbsencesBuilder(
    studyGroups as IMashovStudyGroup[],
    behaveEvents as IBehaveEvent[],
    lessonCounter as IMashovLessonsCounter[],
    timetable as IMashovTT[]
  )

  res.status(200).json(StudyGroups.getStudyGroups())
}
