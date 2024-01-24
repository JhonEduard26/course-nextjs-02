'use client'

import { useAppSelector } from '@/store'
import { SimpleWidget } from './simple-widget'

export const WidgetGrid = () => {
  const count = useAppSelector(state => state.counter.count)

  return (
    <div className="flex flex-wrap justify-center gap-6">
      <SimpleWidget title="Counter" label={`${count}`} href="/dashboard/counter" subtitle="Products" />
      <SimpleWidget title="Counter 2" />
    </div>
  )
}
