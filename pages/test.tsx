import Dashboard from '../components/Dashboard'
import Elipse from '../components/Elipse'
import Logo from '../components/Logo'
import Subject from '../components/Subject'
import TableCategories from '../components/TableCategories'

export default function Test() {
  return (
    <div className="flex flex-col h-full w-screen m-0 p-0 justify-center items-center">
      <Logo />
      <Dashboard
        subjects={[
          {
            name: 'מתמטיקה 5 יא7-יא9',
            lessonsCount: 26,
            absenceCounter: 9,
            semesterHours: 142,
            freeAbsences: 0,
            freeAnnualAbsences: 12,
          },
          {
            name: 'הבעה ולשון יא7',
            lessonsCount: 11,
            absenceCounter: 3,
            semesterHours: 71,
            freeAbsences: 0,
            freeAnnualAbsences: 7,
          },
          {
            name: 'היסטוריה יא7',
            lessonsCount: 16,
            absenceCounter: 2,
            semesterHours: 106,
            freeAbsences: 0,
            freeAnnualAbsences: 13,
          },
          {
            name: 'חינוך יא7',
            lessonsCount: 4,
            absenceCounter: 1,
            semesterHours: 17,
            freeAbsences: 0,
            freeAnnualAbsences: 1,
          },
          {
            name: 'ספרות יא7',
            lessonsCount: 3,
            absenceCounter: 1,
            semesterHours: 35,
            freeAbsences: 0,
            freeAnnualAbsences: 4,
          },
          {
            name: 'אזרחות יא7',
            lessonsCount: 5,
            absenceCounter: 1,
            semesterHours: 35,
            freeAbsences: 0,
            freeAnnualAbsences: 4,
          },
          {
            name: 'חנג בנים יא7',
            lessonsCount: 8,
            absenceCounter: 3,
            semesterHours: 35,
            freeAbsences: 0,
            freeAnnualAbsences: 2,
          },
          {
            name: 'תנ"ך יא7',
            lessonsCount: 12,
            absenceCounter: 0,
            semesterHours: 53,
            freeAbsences: 2,
            freeAnnualAbsences: 7,
          },
          {
            name: 'פיזיקה מואצת יא2-יא9',
            lessonsCount: 26,
            absenceCounter: 6,
            semesterHours: 106,
            freeAbsences: 0,
            freeAnnualAbsences: 9,
          },
          {
            name: 'אנגלית 5 יא4-יא7',
            lessonsCount: 20,
            absenceCounter: 7,
            semesterHours: 89,
            freeAbsences: 0,
            freeAnnualAbsences: 6,
          },
          {
            name: 'מדעי המחשב יא6-יא9',
            lessonsCount: 26,
            absenceCounter: 10,
            semesterHours: 106,
            freeAbsences: 0,
            freeAnnualAbsences: 5,
          },
          {
            name: 'הנדסת תוכנה אפליקציה יא6-יא9',
            lessonsCount: 6,
            absenceCounter: 1,
            semesterHours: 89,
            freeAbsences: 0,
            freeAnnualAbsences: 12,
          },
        ]}
      />
    </div>
  )
}
