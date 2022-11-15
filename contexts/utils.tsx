import { Context, useContext } from 'react'

export function createUseContextHook<T>(ctx: Context<T>) {
  return function useSpecificContext(): T {
    return useContext(ctx)
  }
}
