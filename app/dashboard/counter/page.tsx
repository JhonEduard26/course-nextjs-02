import { CartCounter } from '@/components'

export const metadata = {
  title: 'Carrito de compras',
  description: 'Un simple contador'
}

export default function CounterPage () {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[90dvh]">
      <h1 className="text-slate-900">Productos en el carrito</h1>
      <CartCounter value={0} />
    </div>
  )
}
