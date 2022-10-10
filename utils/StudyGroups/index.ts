import { IStudyGroup } from '../../Interfaces'
import {
  IBehaveEvent,
  IMashovLessonsCounter,
  IMashovStudyGroup,
  eventCodes,
} from '../../Interfaces/Mashov'

const WEEKS_OF_STUDY = 89 / 5 // 89 is the number of the study days between 01/09/22 and 26/01/23, 5 days per study week
const ABS_CONST = 1.17647 // Evaluation of f(n) = n + f(0.15n)

class StudyGroup {
  readonly name: string
  readonly groupId: number

  private freeAbsences = 0
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
  }

  public updateHours(lessonsCount: number, weeklyHours: number) {
    this.lessonsCount = lessonsCount
    this.weeklyHours = weeklyHours
    this.semesterHours = StudyGroup.calcSemesterHours(weeklyHours)
  }

  public static AbsCalc(lessonsCount: number, absenceCounter: number) {
    const dryCalcAbs = lessonsCount * 0.15 - absenceCounter
    return dryCalcAbs * ABS_CONST
  }

  public static AnnualAbsCalc(semesterHours: number, absenceCounter: number) {
    return semesterHours * 0.15 - absenceCounter
  }

  public static calcSemesterHours(weeklyHours: number) {
    return weeklyHours * WEEKS_OF_STUDY
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
}
