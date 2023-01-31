import type { NextApiRequest, NextApiResponse } from 'next'
import MashovLogin from '../../../utils/Mashov/login'
import { fetchDataSource } from '../../../utils/Mashov/datasource'
import { StudyGroupsAbsencesBuilder } from '../../../utils/StudyGroups/absences'
import {
  IBehaveEvent,
  IMashovStudyGroup,
  IMashovLessonsCounter,
  IMashovTT,
  IMashovGrade,
} from '../../../Interfaces/Mashov'
import { IFrontAbsencesStudyGroup } from '../../../Interfaces'
import { StudyGroupGradesBuilder } from '../../../utils/StudyGroups/grades'

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

  const studyGroups = await fetchDataSource('groups', auth)
  const behaveEvents = await fetchDataSource('behave', auth)
  const lessonCounter = await fetchDataSource('lessonsCount', auth)
  const timetable = await fetchDataSource('timetable', auth)

  const absencesStudyGroups = new StudyGroupsAbsencesBuilder(
    studyGroups as IMashovStudyGroup[],
    behaveEvents as IBehaveEvent[],
    lessonCounter as IMashovLessonsCounter[],
    timetable as IMashovTT[]
  )
  const grades = await fetchDataSource('grades', auth)
  const gradesStudyGroups = new StudyGroupGradesBuilder(
    studyGroups as IMashovStudyGroup[],
    grades as IMashovGrade[]
  )

  res
    .status(200)
    .json({
      absences: absencesStudyGroups.getStudyGroups(),
      grades: gradesStudyGroups.getStudyGroups(),
    })
}
