import { IFrontStudyGroup } from '../Interfaces'
import Subject from './Subject'
import TableCategories from './TableCategories'

export interface DashboardProps {
  subjects: IFrontStudyGroup[]
}

export default function Dashboard({ subjects }: DashboardProps) {
  return (
    <div className="flex flex-col w-full">
      <TableCategories />
      {subjects.map((subject, key) => (
        <Subject {...subject} key={key} />
      ))}
    </div>
  )
}
