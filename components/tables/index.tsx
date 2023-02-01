import { useModesProvider } from '../../contexts'

const SUBJECT = 'מקצוע'
const SEMESTERIAL = 'מחצית'
const CURRENTLY = 'כעת'
const AVERAGE = 'ממוצע'

export default function Table() {
  const { selectedMode } = useModesProvider()
  return (
    <div className="flex justify-between w-full dark:text-white pr-4 py-2 font-bold">
      <h1>{SUBJECT}</h1>
      {selectedMode === 'absences' ? (
        <div className="flex w-[124px] pl-2">
          <div className="w-1/2 text-center">
            <a>{CURRENTLY}</a>
          </div>
          <div className="w-1/2 text-center">
            <a>{SEMESTERIAL}</a>
          </div>
        </div>
      ) : (
        <div className="flex w-[92px] justify-center pl-[52px]">
          <a>{AVERAGE}</a>
        </div>
      )}
    </div>
  )
}
