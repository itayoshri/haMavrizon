import { useEffect, useMemo, useState } from 'react'
import Input from './Input'
import Options, { option } from './MultiOption/Options'

const SCHOOL = 'ביה"ס'

export interface SemelProps {
  setSemel(semel: any): unknown
  options: option[]
  loading?: boolean
}

export default function Semel({
  setSemel,
  options,
  loading = false,
}: SemelProps) {
  const [search, setSearch] = useState('')
  const [opened, setOpened] = useState(true)
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSearch(selected)
    setOpened(false)
  }, [selected])

  const filteredOptions = useMemo(() => {
    return options.filter((option) => option.name.includes(search))
  }, [search, options])

  useEffect(() => {
    if (filteredOptions.length > 1) setOpened(true)
  }, [search])

  return (
    <div className="w-full relative">
      <Input
        hint={SCHOOL}
        onChange={setSearch}
        input={search}
        loading={loading}
        inputType="text"
        autoComplete="on"
      />
      <Options
        onClick={setSemel}
        options={search ? filteredOptions : []}
        setSelected={setSelected}
        setOpened={setOpened}
        opened={opened}
      />
    </div>
  )
}
