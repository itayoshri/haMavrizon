import { IMashovStudyGroup } from '../../Interfaces/Mashov'

export abstract class StudyGroup {
  readonly name: string
  readonly groupId: number

  constructor({ name, groupId }: { name: string; groupId: number }) {
    this.name = name
    this.groupId = groupId
  }
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
}
