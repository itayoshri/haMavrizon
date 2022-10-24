export enum eventCodes {
  ATTENDANCE = 111,
  ABSENCE = 105,
}

export enum justificationCodes {
  NO_JUSTIFICATION = -1,
}

export interface IMashovStudyGroup {
  groupId: number
  groupName: string
  subjectName: string
}

export interface IBehaveEvent {
  groupId: number
  eventCode: number
  justificationId: number
}

export interface IMashovLessonsCounter {
  groupId: number
  lessonsCount: number
  weeklyHours: number
}

export interface IMashovTTGroupDetails {
  groupId: number
  groupName: string
  subjectName: string
}

export interface IMashovTTTimetable {
  groupId: number
  day: number
  lesson: number
  roomNum: string
  weeks: number
}

export interface IMashovTT {
  timeTable: IMashovTTTimetable
  groupDetails: IMashovTTGroupDetails
}

export interface IMashovLoginRes {
  headers: {
    'set-cookie': string
    'x-csrf-token': string
  }
  data: {
    credential: {
      userId: string
    }
  }
}
