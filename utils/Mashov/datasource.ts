import axios from 'axios'

export interface IFetchInfo {
  studentId: string
  authCookie: string
  xCsrfToken: string
}

type FetchFor = 'groups' | 'behave' | 'lessonsCount'

export const BASE_URL = 'web.mashov.info/api/students'

export function buildFetchUrl(fetchFor: FetchFor, info: IFetchInfo) {
  switch (fetchFor) {
    default:
      return `https://${BASE_URL}/${info.studentId}/${fetchFor}`
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
