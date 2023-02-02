import { IMashovStudyGroup } from '../../Interfaces/Mashov'

export abstract class StudyGroup {
  readonly name: string
  readonly groupId: number

  constructor({ name, groupId }: { name: string; groupId: number }) {
    this.name = name
    this.groupId = groupId
  }

  abstract getFrontObj()
}

export abstract class StudyGroupsBuilder {
  public studyGroups = new Map<number, StudyGroup>()
  protected initStudyGroups(studyGroups: IMashovStudyGroup[], T) {
    for (const studyGroup of studyGroups) {
      this.studyGroups.set(
        studyGroup.groupId,
        new T({
          name: studyGroup.groupName,
          groupId: studyGroup.groupId,
        })
      )
    }
  }

  public getStudyGroups<T>() {
    const studyGroupsArr = Array.from(this.studyGroups.values())
    const frontStudyGroupsArr = [] as T
    for (const i in studyGroupsArr) {
      frontStudyGroupsArr[i] = studyGroupsArr[i].getFrontObj()
    }
    return frontStudyGroupsArr
  }
}
