import axios from 'axios'
import { LegacyRef, useEffect, useMemo, useRef, useState } from 'react'
import Input, { SearchInput } from './Input'
import Options, { option } from './MultiOption/Options'

const SCHOOL = 'ביה"ס'

export interface SemelProps {
  setSemel(semel: number): unknown
  options: option[]
}

export default function Semel({ setSemel, options }: SemelProps) {
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
      <SearchInput
        hint={SCHOOL}
        onChange={setSearch}
        setInput={setSearch}
        input={search}
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
