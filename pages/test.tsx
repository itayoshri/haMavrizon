import { useState } from 'react'
import Options from '../components/Forms/MultiOption/Options'

const options = [
  { label: 'היוש', semel: 123 },
  { label: 'שהיוש', semel: 1234 },
]

export default function Test() {
  const [selected, setSelected] = useState('אבגד')
  const [opened, setOpened] = useState(true)

  return (
    <div>
      <a>{selected}</a>
      <Options
        options={options}
        onClick={console.log}
        setSelected={setSelected}
        setOpened={setOpened}
        opened={opened}
      />
    </div>
  )
}
