import type { NextApiRequest, NextApiResponse } from 'next'
import MashovLogin from '../../../utils/Mashov/login'
import { fetchDataSource } from '../../../utils/Mashov/datasource'
import { IMashovStudyGroup, IMashovGrade } from '../../../Interfaces/Mashov'
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
  const grades = await fetchDataSource('grades', auth)
  const StudyGroups = new StudyGroupGradesBuilder(
    studyGroups as IMashovStudyGroup[],
    grades as IMashovGrade[]
  )

  res.status(200).json(StudyGroups.getStudyGroups())
}
