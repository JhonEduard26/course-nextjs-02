'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  path: string
  title: string
  subtitle: string
  icon: JSX.Element
}

export const MenuItem = ({ icon, path, subtitle, title }: Props) => {
  const pathName = usePathname()

  return (
    <Link
      href={path}
      className={clsx('w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150', {
        'bg-blue-800': path === pathName
      })}
    >
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
      </div>
    </Link>

  )
}
