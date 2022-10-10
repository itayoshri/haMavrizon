export enum eventCodes {
  ATTENDANCE = 111,
  ABSENCE = 105,
}

export interface IMashovStudyGroup {
  groupId: number
  groupName: string
  subjectName: string
}

export interface IBehaveEvent {
  groupId: number
  eventCode: number
}

export interface IMashovLessonsCounter {
  groupId: number
  lessonsCount: number
  weeklyHours: number
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
