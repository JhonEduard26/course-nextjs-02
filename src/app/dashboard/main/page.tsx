import { WidgetGrid } from '@/ui'

export default function MainPage () {
  return (
    <div>
      <h1>Dashboard</h1>
      <span className="inline-block mb-6 text-2xl">General information</span>
      <WidgetGrid />
    </div>
  )
}
