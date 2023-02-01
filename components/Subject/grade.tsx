import { IGrade } from '../../utils/StudyGroups/grades'
import AbsElipse from '../Elipse/AbsElipse'
import Checkbox from '../Forms/Checkbox'

export interface GradeProps {
  setSelected(): unknown
}

export default function Grade({
  setSelected,
  title,
  grade,
  eventDate,
  gradeType,
  selected,
}: GradeProps & IGrade) {
  return (
    <div className="flex w-full justify-between py-3 px-5 border-b-[1px] gap-2 items-center dark:text-white border-zinc-200 dark:border-zinc-800">
      <div className="flex truncate items-center gap-3">
        <Checkbox selected={selected} setSelected={setSelected} />
        <div className="flex flex-col truncate">
          <span className="truncate text-ellipsis">
            <a className="font-medium">{title}</a>
            <a className="text-xs text-gray-400 mr-1">({gradeType})</a>
          </span>
          <a className="text-sm">
            {new Date(eventDate).toLocaleDateString().replaceAll('.', '/')}
          </a>
        </div>
      </div>
      <div className="">
        <AbsElipse
          label={grade}
          lessonsCount={100}
          absenceCounter={grade}
          type="grade"
        />
      </div>
    </div>
  )
}
