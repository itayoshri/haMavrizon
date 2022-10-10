import { IStudyGroup } from '../../Interfaces'
import {
  IBehaveEvent,
  ISGCounter,
  IMashovStudyGroup,
  eventCodes,
} from '../../Interfaces/Mashov'

class StudyGroup implements IStudyGroup {
  readonly name: string
  readonly groupId: number

  public lessonsCount = 0
  public semesterHours = 0
  public weeklyHours = 0
  public absenceCounter = 0

  constructor({ name, groupId }: { name: string; groupId: number }) {
    this.name = name
    this.groupId = groupId
  }
}

export class StudyGroupsBuilder {
  public studyGroups = new Map<number, StudyGroup>()
  constructor(
    studyGroups: IMashovStudyGroup[],
    behaveEvents: IBehaveEvent[],
    lessonCounter: ISGCounter[]
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
        sg.weeklyHours = studyGroup.weeklyHours
        sg.lessonsCount = studyGroup.lessonsCount
      }
    }

    for (const event of behaveEvents) {
      if (event.eventCode == eventCodes.ABSENCE) {
        const sg = this.studyGroups.get(event.groupId)
        if (sg != undefined) sg.absenceCounter++
      }
    }
  }
}
