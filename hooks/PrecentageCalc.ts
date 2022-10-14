import { useMemo } from 'react'

export default function PrecentageCalc(amount: number, outOff: number) {
  return useMemo(() => {
    return 100 - (amount / outOff) * 100
  }, [amount, outOff])
}
