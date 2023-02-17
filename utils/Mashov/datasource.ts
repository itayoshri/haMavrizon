import axios from 'axios'

export interface IFetchInfo {
  studentId: string
  authCookie: string
  xCsrfToken: string
  groupId?: number
  start?: string
  end?: string
}

type FetchFor =
  | 'groups'
  | 'behave'
  | 'lessonsCount'
  | 'timetable'
  | 'grades'
  | 'lessonHistory'

export const BASE_URL = 'web.mashov.info/api'

export function buildFetchUrl(fetchFor: FetchFor, info: IFetchInfo) {
  switch (fetchFor) {
    case 'lessonHistory':
      return `https://${BASE_URL}/groups/${info.groupId}/history`

    default:
      const query = `${info.start ? `start=${info.start}` : ''}${
        info.start && info.end
          ? `&end=${info.end}`
          : info.end
          ? `end=${info.end}`
          : ''
      }`
      return `https://${BASE_URL}/students/${info.studentId}/${fetchFor}${
        query ? `?${query}` : ''
      }`
  }
}

export async function fetchDataSource<T extends {}>(
  fetchFor: FetchFor,
  info: IFetchInfo
) {
  const url = buildFetchUrl(fetchFor, info)
  const res = await axios.get<T>(url, {
    headers: { Cookie: info.authCookie, 'X-csrf-token': info.xCsrfToken },
  })
  return res.data
}
