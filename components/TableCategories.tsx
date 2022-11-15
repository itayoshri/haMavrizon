const SUBJECT = 'מקצוע'
const SEMESTERIAL = 'מחצית'
const CURRENTLY = 'כעת'

export default function TableCategories() {
  return (
    <div className="flex justify-between w-full dark:text-white pr-4 py-4 font-bold">
      <h1>{SUBJECT}</h1>
      <div className="flex w-[124px] pl-2">
        <div className="w-1/2 text-center">
          <a>{CURRENTLY}</a>
        </div>
        <div className="w-1/2 text-center">
          <a>{SEMESTERIAL}</a>
        </div>
      </div>
    </div>
  )
}
