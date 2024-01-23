import { SimpleWidget } from '@/ui'

export default function MainPage () {
  return (
    <div>
      <h1>Dashboard</h1>
      <span className="inline-block mb-6 text-2xl">General information</span>
      <div className="flex flex-wrap justify-center gap-6">
        <SimpleWidget />
      </div>
    </div>
  )
}
