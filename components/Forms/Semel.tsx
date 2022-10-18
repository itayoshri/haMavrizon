import { LegacyRef, useEffect, useRef, useState } from 'react'
import Input, { SearchInput } from './Input'
import Options from './MultiOption/Options'

export interface SemelProps {
  setSemel(semel: number): unknown
}

export default function Semel({ setSemel }: SemelProps) {
  const [search, setSearch] = useState('')
  const [opened, setOpened] = useState(true)
  const [selected, setSelected] = useState('')

  useEffect(() => {
    setSearch(selected)
    setOpened(false)
  }, [selected])

  return (
    <div className="w-full relative">
      <SearchInput
        hint="סמל בית ספר וזה"
        onChange={setSearch}
        setInput={setSearch}
        input={search}
      />
      <Options
        onClick={setSemel}
        options={[
          { label: 'היוש', semel: 123 },
          { label: 'שהיוש', semel: 1234 },
        ]}
        setSelected={setSelected}
        setOpened={setOpened}
        opened={opened}
      />
    </div>
  )
}
