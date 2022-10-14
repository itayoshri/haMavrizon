import Elipse from '../components/Elipse'
import Subject from '../components/Subject'
import TableCategories from '../components/TableCategories'

export default function Test() {
  return (
    <div className="flex flex-col h-screen w-screen m-0 p-0 justify-center items-center">
      <TableCategories />
      <Subject
        {...{
          name: 'פיזיקה מואצת יא2-יא9',
          lessonsCount: 26,
          absenceCounter: 6,
          semesterHours: 106,
          freeAbsences: 0,
          freeAnnualAbsences: 9,
        }}
      ></Subject>
      <Subject
        {...{
          name: 'פיזיקה מואצת יא2-יא9',
          lessonsCount: 26,
          absenceCounter: 6,
          semesterHours: 106,
          freeAbsences: 0,
          freeAnnualAbsences: 9,
        }}
      ></Subject>
    </div>
  )
}
