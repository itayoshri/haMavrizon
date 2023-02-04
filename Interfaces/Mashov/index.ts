export enum eventCodes {
  ATTENDANCE = 111,
  ABSENCE = 105,
}

export enum justificationCodes {
  NO_JUSTIFICATION = -1,
}

export type EventLabels = 'היעדרות'

export type Grade =
  | 'בוחן'
  | 'מבחן בכתב'
  | 'תלמידאות'
  | 'דו"ח מעבדה'
  | 'שיעורי בית'
//| string

export interface IMashovStudyGroup {
  groupId: number
  groupName: string
  subjectName: string
  groupTeachers: IMashovTeacher
}

export interface IMashovTeacher {
  teacherGuid: string
  teacherName: string
}

export interface IBehaveEvent {
  groupId: number
  eventCode: number
  justificationId: number
  achvaName: EventLabels
  lessonDate: string
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
  groupTeachers: IMashovTeacher[]
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

export interface IMashovGrade {
  year: number
  studentGuid: number
  gradingEventId: number
  grade: number
  gradingEvent: string
  teacherName: string
  groupId: number
  groupName: string
  subjectName: string
  gradeType: Grade //TODO: Type gradeType
  eventDate: string
  timestamp: string
}

export interface IMashovLessonHistory {
  groupId: number
  groupName: string
  lesson: number
  lessonDate: string
  tookPlace: boolean
}
