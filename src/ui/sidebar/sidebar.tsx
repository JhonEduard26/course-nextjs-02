import Image from 'next/image'
import { MenuItem } from '..'

const menuItems = [
  {
    title: 'Dashboard',
    subtitle: 'Your personal dashboard',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 16.5c-3.59 0-6.5-2.91-6.5-6.5S8.41 5.5 12 5.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5zm0-11c-2.485 0-4.5 2.015-4.5 4.5S9.515 16.5 12 16.5s4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z" />
    </svg>,
    path: '/dashboard/main'
  },
  {
    title: 'Counter',
    subtitle: 'Manage your projects',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zm0 2.291l8.387 4.194L12 10.97 3.613 8.485 12 4.291zM2 13v7a1 1 0 001 1h18a1 1 0 001-1v-7l-10 5-10-5zm12 8.485l-8.387-4.194L12 13.03l8.387 4.26L14 21.485z" />
    </svg>,
    path: '/dashboard/counter'
  },
  {
    title: 'Pokemons',
    subtitle: 'Static generation',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path fill="currentColor" d="M21.5 5h-3.586l-1.707-2.561A1 1 0 0014.293 2H9.707a1 1 0 00-.914.639L7.293 5H3.5a1 1 0 000 2h1.586l1.707 2.561A1 1 0 007.707 12H6v8a1 1 0 001 1h12a1 1 0 001-1v-8h-1.707a1 1 0 00-.914-.639L17.586 7H21.5a1 1 0 000-2zM9.293 4h5.414l1 1.5H8.293l1-1.5zm9.207 8H5.5v-6h3.586l1 1.5H14a1 1 0 001-1V6h3.914l1 1.5H5.5a1 1 0 010-2h15a1 1 0 011 1v8a1 1 0 01-1 1z" />
    </svg>,
    path: '/dashboard/pokemons'
  },
  {
    title: 'Favorites',
    subtitle: 'Global state',
    icon: <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2L9.5 8.5H2l6.5 4.5L7 21.5l5.5-6.5L18 21.5l-1.5-8.5L22 8.5h-7.5L12 2z" />
    </svg>,
    path: '/dashboard/favorites'
  }
]

export const Sidebar = () => {
  return (
    <div id="menu" className="fixed bg-gray-900 min-h-screen z-10 text-slate-300 w-72 left-0 overflow-y-auto">
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt=""
              width={48}
              height={58}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Edward Tompson
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          menuItems.map((item) => (
            <MenuItem key={item.path} {...item} />
          ))
        }
      </div>
    </div>
  )
}
