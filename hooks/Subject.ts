import { useMemo } from 'react'

export default function PrecentageCalc(amount: number, outOff: number) {
  return useMemo(() => {
    return 100 - (amount / outOff) * 100
  }, [amount, outOff])
}

export type PathColor = 'green' | 'yellow' | 'red'
export const pathColors = {
  green: '#34C759',
  yellow: '#FF9500',
  red: '#FF3B30',
}

export function GetColor(percentage: number): PathColor {
  /*
  if (percentage <= 15) return 'green' // no affect
  if (percentage > 15 && percentage <= 30) return 'yellow' // affection
  return 'red' // no grade
  */
  if (percentage >= 85) return 'green' // no affect
  if (percentage < 85 && percentage <= 70) return 'yellow' // affection
  return 'red' // no grade
}
