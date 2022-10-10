import { IFrontStudyGroup, IStudyGroup } from '../../Interfaces'
import {
  IBehaveEvent,
  IMashovLessonsCounter,
  IMashovStudyGroup,
  eventCodes,
} from '../../Interfaces/Mashov'

const WEEKS_OF_STUDY = 89 / 5 // 89 is the number of the study days between 01/09/22 and 26/01/23, 5 days per study week
const ABS_MULTIPLIER = 1.17647 // Evaluation of f(n) = n + f(0.15n)
const ALLOWED_ABS = 0.15

class StudyGroup {
  readonly name: string
  readonly groupId: number

  public freeAbsences = 0
  public freeAnnualAbsences = 0

  private semesterHours = 0
  private lessonsCount = 0
  private weeklyHours = 0
  private absenceCounter = 0

  constructor({ name, groupId }: { name: string; groupId: number }) {
    this.name = name
    this.groupId = groupId
  }

  public addAbsence() {
    this.absenceCounter++
    this.freeAbsences = StudyGroup.AbsCalc(
      this.lessonsCount,
      this.absenceCounter
    )
    this.freeAnnualAbsences = StudyGroup.AnnualAbsCalc(
      this.semesterHours,
      this.absenceCounter
    )
  }

  public updateHours(lessonsCount: number, weeklyHours: number) {
    this.lessonsCount = lessonsCount
    this.weeklyHours = weeklyHours
    this.semesterHours = StudyGroup.calcSemesterHours(weeklyHours)
  }

  static AbsCalc(lessonsCount: number, absenceCounter: number) {
    const dryCalcAbs = lessonsCount * ALLOWED_ABS - absenceCounter
    const freeAbs = dryCalcAbs * ABS_MULTIPLIER
    return Math.floor(freeAbs > 0 ? freeAbs : 0)
  }

  static AnnualAbsCalc(semesterHours: number, absenceCounter: number) {
    const freeAbs = semesterHours * ALLOWED_ABS - absenceCounter
    return Math.floor(freeAbs > 0 ? freeAbs : 0)
  }

  static calcSemesterHours(weeklyHours: number) {
    return Math.floor(weeklyHours * WEEKS_OF_STUDY)
  }

  public static getFrontObj(sg: StudyGroup): IFrontStudyGroup {
    return {
      name: sg.name,
      lessonsCount: sg.lessonsCount,
      absenceCounter: sg.absenceCounter,
      semesterHours: sg.semesterHours,
      freeAbsences: sg.freeAbsences,
      freeAnnualAbsences: sg.freeAnnualAbsences,
    }
  }
}

export class StudyGroupsBuilder {
  public studyGroups = new Map<number, StudyGroup>()
  constructor(
    studyGroups: IMashovStudyGroup[],
    behaveEvents: IBehaveEvent[],
    lessonCounter: IMashovLessonsCounter[]
  ) {
    for (const studyGroup of studyGroups) {
      this.studyGroups.set(
        studyGroup.groupId,
        new StudyGroup({
          name: studyGroup.groupName,
          groupId: studyGroup.groupId,
        })
      )
    }

    for (const studyGroup of lessonCounter) {
      const sg = this.studyGroups.get(studyGroup.groupId)
      if (sg != undefined) {
        sg.updateHours(studyGroup.lessonsCount, studyGroup.weeklyHours)
      }
    }

    for (const event of behaveEvents) {
      if (event.eventCode == eventCodes.ABSENCE) {
        const sg = this.studyGroups.get(event.groupId)
        if (sg != undefined) sg.addAbsence()
      }
    }
  }

  public getStudyGroups() {
    const studyGroupsArr = Array.from(this.studyGroups.values())
    const frontStudyGroupsArr = [] as IFrontStudyGroup[]
    for (const i in studyGroupsArr) {
      frontStudyGroupsArr[i] = StudyGroup.getFrontObj(studyGroupsArr[i])
    }
    return frontStudyGroupsArr
  }
}
