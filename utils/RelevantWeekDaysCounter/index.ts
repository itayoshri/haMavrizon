import { holidaysCalendar } from './data'

const START_OF_SEMESTER: DateDisplay = [1, 9, 2023]
export const END_OF_YEAR: DateDisplay = [20, 1, 2024]

type Month = IDay[]
export type DateDisplay = [number, number, number] //[day, month, year]
type Direction = 'from' | 'to'

interface IDay {
  studying: boolean
  dayOfWeek: number
}

interface IYear {
  year: number
  calendar: Month[]
}
interface IHoliday {
  start: number[]
  end: number[]
  label: string
}

export class RelevantWeekDaysCounter {
  public calendar = { calendar: [] as IYear[], years: {} }

  /**
   * @param month - the specific month you want to get the amount of days about
   * @param year - the specific year of the month you want to get amount of days about
   * @returns amount of days in a specific month
   * */
  static getDaysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate()
  }

  static InitMonth(month: number, year: number): IDay[] {
    const days: IDay[] = []
    const daysInMonth = this.getDaysInMonth(month + 1, year)
    for (let d = 0; d <= daysInMonth - 1; d++) {
      const date = new Date(year, month, d + 1)
      const dayOfWeek = date.getDay()
      days[d] = {
        studying: /*dayOfWeek == 6 ? false : */ true,
        dayOfWeek: dayOfWeek,
      }
    }
    return days
  }

  static getFromTo(date: DateDisplay, direction: Direction) {
    const from: DateDisplay = direction == 'from' ? date : [1, 1, date[2]] // if the day that specificed is the end of the semester - set the first year of the month as the start of the year
    const to: DateDisplay = //  if the day that specificed is the start of the semester - set the last year of the month as the end of the year
      direction == 'to'
        ? date
        : [RelevantWeekDaysCounter.getDaysInMonth(12, date[2]), 12, date[2]]
    return { to, from }
  }

  static getStartEnd(from: DateDisplay, to: DateDisplay, current: DateDisplay) {
    if (from[2] == to[2]) return { start: from, end: to }
    if (current[2] < to[2]) {
      return {
        start: from,
        end: RelevantWeekDaysCounter.getFromTo(current, 'from').to,
      }
    }
    if (from[2] < current[2]) {
      return {
        start: RelevantWeekDaysCounter.getFromTo(current, 'to').from,
        end: to,
      }
    }
  }

  private buildYearCalendar(date: DateDisplay, direction: Direction) {
    const months: Month[] = []
    const { from, to } = RelevantWeekDaysCounter.getFromTo(date, direction)
    for (let m = from[1] - 1; m < to[1]; m++) {
      months[m] = RelevantWeekDaysCounter.InitMonth(m, from[2])
    }

    return months
  }

  private RemoveDay(date: DateDisplay) {
    const yearIndex = this.calendar.years[date[2]]
    const m = date[1] - 1
    const d = date[0] - 1
    if (this.calendar.calendar[yearIndex].calendar[m])
      this.calendar.calendar[yearIndex].calendar[m][d].studying = false
  }

  private RemoveHolidays(holidaysCalendar: IHoliday[]) {
    for (const holiday of holidaysCalendar.reverse()) {
      const year = holiday.start[2]
      const month = holiday.start[1]

      const dStart = holiday.start[0]
      const dEnd = holiday.end[0]

      for (let d = dStart; d <= dEnd; d++) {
        this.RemoveDay([d, month, year])
      }
    }
  }

  public GetDaysOfWeekCounter(from: DateDisplay, to: DateDisplay) {
    const weekDaysCounter = [0, 0, 0, 0, 0, 0, 0]
    for (let y = from[2]; y <= to[2]; y++) {
      const yearIndex = this.calendar.years[y]
      const { start, end } = RelevantWeekDaysCounter.getStartEnd(from, to, [
        1,
        1,
        y,
      ])

      for (let m = start[1] - 1; m < end[1]; m++) {
        const endMonth =
          end[1] - 1 > m
            ? RelevantWeekDaysCounter.getDaysInMonth(m + 1, end[2])
            : end[0]
        const startMOnth = start[1] - 1 < m ? 1 : start[0]

        for (let d = startMOnth - 1; d < endMonth; d++) {
          const day = this.calendar.calendar[yearIndex].calendar[m][d]
          if (day.studying == true) weekDaysCounter[day.dayOfWeek]++
        }
      }
    }
    return weekDaysCounter
  }

  constructor() {
    // Checks whether the semester starts and ends in different years
    if (START_OF_SEMESTER[2] != END_OF_YEAR[2]) {
      this.calendar.years[START_OF_SEMESTER[2]] = 0
      this.calendar.years[END_OF_YEAR[2]] = 1
      const firstYear = {
        year: START_OF_SEMESTER[2],
        calendar: this.buildYearCalendar(START_OF_SEMESTER, 'from'),
      }

      const secondYear = {
        year: END_OF_YEAR[2],
        calendar: this.buildYearCalendar(END_OF_YEAR, 'to'),
      }

      this.calendar.calendar.push(firstYear, secondYear)
    } else {
      this.calendar.years[START_OF_SEMESTER[2]] = 0
      this.calendar.calendar.push({
        year: START_OF_SEMESTER[2],
        calendar: this.buildYearCalendar(START_OF_SEMESTER, 'from'),
      })
    }
    this.RemoveHolidays(holidaysCalendar)
  }
}
