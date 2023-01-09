const START_OF_SEMESTER: DateDisplay = [1, 9, 2022]
const END_OF_SEMESTER: DateDisplay = [30, 1, 2023]

type Month = boolean[]
type DateDisplay = [number, number, number] //[day, month, year]
type Direction = 'from' | 'to'

interface IYear {
  year: number
  calendar: Month[]
}

export class RelevantWeekDaysCounter {
  private calendar: IYear[] = []

  /**
   * @param month - the specific month you want to get the amount of days about
   * @param year - the specific year of the month you want to get amount of days about
   * @returns amount of days in a specific month
   * */
  static getDaysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate()
  }

  static InitMonth(month: number, year: number): boolean[] {
    const days: boolean[] = []
    const daysInMonth = this.getDaysInMonth(month, year)
    for (let d = 0; d <= daysInMonth - 1; d++) {
      days[d] = true
    }
    return days
  }

  private buildYearCalendar(date: DateDisplay, direction: Direction) {
    const months: Month[] = []

    const from: DateDisplay = direction == 'from' ? date : [1, 1, date[2]] // if the day that specificed is the end of the semester - set the first year of the month as the start of the year
    const to: DateDisplay = //  if the day that specificed is the start of the semester - set the last year of the month as the end of the year
      direction == 'to'
        ? date
        : [RelevantWeekDaysCounter.getDaysInMonth(12, date[2]), 12, date[2]]

    for (let m = from[1] - 1; m < to[1]; m++) {
      months[m] = RelevantWeekDaysCounter.InitMonth(m, from[2])
    }

    return months
  }

  constructor() {
    // Checks whether the semester starts and ends in different years
    if (START_OF_SEMESTER[2] != END_OF_SEMESTER[2]) {
      const firstYear = {
        year: START_OF_SEMESTER[2],
        calendar: this.buildYearCalendar(START_OF_SEMESTER, 'from'),
      }

      const secondYear = {
        year: START_OF_SEMESTER[2],
        calendar: this.buildYearCalendar(START_OF_SEMESTER, 'from'),
      }

      this.calendar.push(firstYear, secondYear)
    } else {
      this.calendar.push({
        year: START_OF_SEMESTER[2],
        calendar: this.buildYearCalendar(START_OF_SEMESTER, 'from'),
      })
    }
  }
}
