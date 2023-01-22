import Footer from '../components/Footer'
import Button from '../components/Forms/Button'
import Popup from '../components/Forms/Popup'
import DashboardView from '../components/Views/DashboardView'

const data = [
  {
    name: 'מתמטיקה 5 יא3-יא9',
    lessonsCount: 71,
    absenceCounter: 7,
    semesterHours: 95,
    freeAbsences: 4,
    freeAnnualAbsences: 7,
  },
  {
    name: 'הבעה ולשון יא7',
    lessonsCount: 44,
    absenceCounter: 4,
    semesterHours: 56,
    freeAbsences: 3,
    freeAnnualAbsences: 4,
  },
  {
    name: 'היסטוריה יא7',
    lessonsCount: 46,
    absenceCounter: 2,
    semesterHours: 64,
    freeAbsences: 5,
    freeAnnualAbsences: 7,
  },
  {
    name: 'חינוך יא7',
    lessonsCount: 14,
    absenceCounter: 1,
    semesterHours: 17,
    freeAbsences: 1,
    freeAnnualAbsences: 1,
  },
  {
    name: 'ספרות יא7',
    lessonsCount: 12,
    absenceCounter: 0,
    semesterHours: 18,
    freeAbsences: 2,
    freeAnnualAbsences: 2,
  },
  {
    name: 'אזרחות יא7',
    lessonsCount: 26,
    absenceCounter: 4,
    semesterHours: 32,
    freeAbsences: 0,
    freeAnnualAbsences: 0,
  },
  {
    name: 'חנג בנים יא7',
    lessonsCount: 26,
    absenceCounter: 5,
    semesterHours: 32,
    freeAbsences: 0,
    freeAnnualAbsences: 0,
  },
  {
    name: 'תנ"ך יא7',
    lessonsCount: 31,
    absenceCounter: 2,
    semesterHours: 40,
    freeAbsences: 3,
    freeAnnualAbsences: 4,
  },
  {
    name: 'פיזיקה מואצת יא2-יא9',
    lessonsCount: 86,
    absenceCounter: 3,
    semesterHours: 104,
    freeAbsences: 11,
    freeAnnualAbsences: 12,
  },
  {
    name: 'אנגלית 5 יא4-יא7',
    lessonsCount: 63,
    absenceCounter: 7,
    semesterHours: 78,
    freeAbsences: 2,
    freeAnnualAbsences: 4,
  },
  {
    name: 'מדעי המחשב יא6-יא9',
    lessonsCount: 74,
    absenceCounter: 8,
    semesterHours: 92,
    freeAbsences: 3,
    freeAnnualAbsences: 5,
  },
  {
    name: 'הנדסת תוכנה אפליקציה יא6-יא9',
    lessonsCount: 35,
    absenceCounter: 5,
    semesterHours: 50,
    freeAbsences: 0,
    freeAnnualAbsences: 2,
  },
]
export default function Test() {
  return <DashboardView subjects={data} />
}
