'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { decrement, increment, initCountState } from '@/store/counter/counter-slice'
import { useEffect } from 'react'

interface Props {
  value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initCountState(value))
  }, [dispatch, value])

  return (
    <div className="flex flex-col items-center">
      <span className="text-8xl mb-4">{count}</span>
      <div className="flex gap-x-2">
        <button
          className="py-2.5 px-5 rounded-lg bg-slate-900 text-white hover:bg-slate-700 active:scale-[.97]"
          onClick={() => dispatch(increment())}
        >
          Aumentar
        </button>
        <button
          className="py-2.5 px-5 rounded-lg bg-slate-900 text-white hover:bg-slate-700 active:scale-[.97]"
          onClick={() => dispatch(decrement())}
        >
          Reducir
        </button>
      </div>
    </div>
  )
}
