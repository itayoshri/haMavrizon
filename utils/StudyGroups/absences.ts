import { StudyGroup, StudyGroupsBuilder } from '.'
import { IFrontAbsencesStudyGroup } from '../../Interfaces'
import {
  IBehaveEvent,
  IMashovLessonsCounter,
  IMashovStudyGroup,
  eventCodes,
  justificationCodes,
  IMashovTTGroupDetails,
  IMashovTTTimetable,
  IMashovTT,
  EventLabels,
  IMashovLessonHistory,
} from '../../Interfaces/Mashov'
import { fetchDataSource, IFetchInfo } from '../Mashov/datasource'
import {
  DateDisplay,
  RelevantWeekDaysCounter,
} from '../RelevantWeekDaysCounter'

const WEEKS_OF_STUDY = 89 / 5 // 89 is the number of the study days between 01/09/22 and 26/01/23, 5 days per study week
const ABS_MULTIPLIER = 1.17647 // Evaluation of f(n) = n + f(0.15n)
const ALLOWED_ABS = 0.15
//const daysOfStudy = [16, 17, 14, 17, 19, 20] // amount of study days by days of week

let daysOfStudy = []

class StudyGroupAbsences extends StudyGroup {
  readonly name: string
  readonly groupId: number

  public freeAbsences = 0
  public freeAnnualAbsences = 0

  private semesterHours = 0
  private lessonsCount = 0
  private absenceCounter = 0

  public addAbsence() {
    this.absenceCounter++

    this.freeAbsences = StudyGroupAbsences.AbsCalc(
      this.lessonsCount,
      this.absenceCounter
    )
    this.freeAnnualAbsences = StudyGroupAbsences.AnnualAbsCalc(
      this.semesterHours,
      this.absenceCounter
    )
  }

  public addLessonsCount(lessonsCount: number) {
    this.lessonsCount = lessonsCount
    this.semesterHours += lessonsCount
  }

  public updateHours(lesson: IMashovTTTimetable) {
    this.semesterHours += daysOfStudy[lesson.day - 1]
    this.freeAbsences = StudyGroupAbsences.AbsCalc(
      this.lessonsCount,
      this.absenceCounter
    )
    this.freeAnnualAbsences = StudyGroupAbsences.AnnualAbsCalc(
      this.semesterHours,
      this.absenceCounter
    )
  }

  static AbsCalc(lessonsCount: number, absenceCounter: number) {
    const freeAbs =
      (lessonsCount * ALLOWED_ABS - absenceCounter) * ABS_MULTIPLIER
    return Math.floor(freeAbs > 0 ? freeAbs : 0)
  }

  static AnnualAbsCalc(semesterHours: number, absenceCounter: number) {
    const freeAbs = semesterHours * ALLOWED_ABS - absenceCounter
    return Math.floor(freeAbs > 0 ? freeAbs : 0)
  }

  static calcSemesterHours(weeklyHours: number) {
    return Math.floor(weeklyHours * WEEKS_OF_STUDY)
  }

  public getFrontObj(): IFrontAbsencesStudyGroup {
    return {
      name: this.name,
      lessonsCount: this.lessonsCount,
      absenceCounter: this.absenceCounter,
      semesterHours: this.semesterHours,
      freeAbsences: this.freeAbsences,
      freeAnnualAbsences: this.freeAnnualAbsences,
    }
  }
}

const absenceEventNames = ['היעדרות', 'העדרות']

const isAbsence = (event: IBehaveEvent) => {
  const { achvaName: eventName } = event
  for (const name of absenceEventNames) if (eventName === name) return true
  return false
}

export class StudyGroupsAbsencesBuilder extends StudyGroupsBuilder {
  public studyGroups = new Map<number, StudyGroupAbsences>()
  constructor({
    studyGroups,
    endOfSemester,
  }: {
    studyGroups: IMashovStudyGroup[]
    endOfSemester: DateDisplay
  }) {
    super()
    this.initStudyGroups(studyGroups, StudyGroupAbsences)

    const now = new Date()
    const nowDate = [
      now.getDate(),
      now.getMonth() + 1,
      now.getFullYear(),
    ] as DateDisplay
    const calander = new RelevantWeekDaysCounter()

    daysOfStudy = calander.GetDaysOfWeekCounter(nowDate, endOfSemester)
  }

  public initLessonsCount(lessonsCount: IMashovLessonsCounter[]) {
    for (const studyGroup of lessonsCount) {
      const sg = this.studyGroups.get(studyGroup.groupId)
      if (sg != undefined) sg.addLessonsCount(studyGroup.lessonsCount)
    }
  }

  public initBehaveEvents(behaveEvents: IBehaveEvent[]) {
    for (const event of behaveEvents) {
      if (
        isAbsence(event) &&
        event.justificationId == justificationCodes.NO_JUSTIFICATION
      ) {
        const sg = this.studyGroups.get(event.groupId)
        if (sg != undefined) sg.addAbsence()
      }
    }
  }

  public initSemesterHours(timetable: IMashovTT[]) {
    for (const obj of timetable) {
      const lesson = obj.timeTable
      const sg = this.studyGroups.get(lesson.groupId)
      if (sg != undefined) {
        sg.updateHours(lesson)
      }
    }
  }
}
