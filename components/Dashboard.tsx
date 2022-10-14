import { IFrontStudyGroup } from '../Interfaces'
import Subject from './Subject'

export default function Dashboard({
  subjects,
}: {
  subjects: IFrontStudyGroup[]
}) {
  return (
    <div className="flex flex-col w-full">
      {subjects.map((subject, key) => (
        <Subject {...subject} key={key} />
      ))}
    </div>
  )
}
