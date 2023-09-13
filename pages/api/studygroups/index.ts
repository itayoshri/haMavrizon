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
import {
  IFrontAbsencesStudyGroup,
  IFrontGradesStudyGroup,
} from '../../../Interfaces'
import { StudyGroupGradesBuilder } from '../../../utils/StudyGroups/grades'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const beginningOfSemesterDate = new Date(2023, 8, 1)

  const { semel, username, password } = req.query

  const { authCookie, studentId, xCsrfToken } = await MashovLogin({
    semel: semel as string,
    username: username as string,
    password: password as string,
  })
  const auth = { authCookie, studentId, xCsrfToken }
  const info = { ...auth, start: beginningOfSemesterDate.toISOString() }

  const studyGroups = await fetchDataSource<IMashovStudyGroup[]>('groups', info)
  const lessonsCount = await fetchDataSource<IMashovLessonsCounter[]>(
    'lessonsCount',
    info
  )
  const behaveEvents = await fetchDataSource<IBehaveEvent[]>('behave', info)
  const timetable = await fetchDataSource<IMashovTT[]>('timetable', info)

  const absencesStudyGroups = new StudyGroupsAbsencesBuilder({
    studyGroups,
  })

  absencesStudyGroups.initLessonsCount(lessonsCount)
  absencesStudyGroups.initBehaveEvents(behaveEvents)
  absencesStudyGroups.initSemesterHours(timetable)

  const grades = await fetchDataSource('grades', auth)
  const gradesStudyGroups = new StudyGroupGradesBuilder(
    studyGroups as IMashovStudyGroup[],
    grades as IMashovGrade[]
  )

  res.status(200).json({
    absences: absencesStudyGroups.getStudyGroups(),
    grades: gradesStudyGroups
      .getStudyGroups<IFrontGradesStudyGroup[]>()
      .sort((sgA, sgB) => (sgA.selected < sgB.selected ? 1 : -1)),
  })
}
