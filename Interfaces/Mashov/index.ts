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

export interface ISGCounter {
  groupId: number
  lessonsCount: number
  weeklyHours: number
}
