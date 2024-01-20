'use client'

import { useState } from 'react'

interface Props {
  value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setValue] = useState(value)

  const handleIncrement = () => {
    setValue(count + 1)
  }

  const handleDecrement = () => {
    if (count === 0) return
    setValue(count - 1)
  }

  return (
    <div className="flex flex-col items-center">
      <span className="text-8xl mb-4">{count}</span>
      <div className="flex gap-x-2">
        <button
          className="py-2.5 px-5 rounded-lg bg-slate-900 text-white hover:bg-slate-700 active:scale-[.97]"
          onClick={handleIncrement}
        >
          Aumentar
        </button>
        <button
          className="py-2.5 px-5 rounded-lg bg-slate-900 text-white hover:bg-slate-700 active:scale-[.97]"
          onClick={handleDecrement}
        >
          Reducir
        </button>
      </div>
    </div>
  )
}
