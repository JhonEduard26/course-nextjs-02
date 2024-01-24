'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemons'
import clsx from 'clsx'

interface Props {
  id: string
  name: string
}

export const AddFavoriteButton = ({ id, name }: Props) => {
  const dispatch = useAppDispatch()
  const pokemons = useAppSelector(state => state.pokemon.favorites)

  const pokemon = pokemons.find(pokemon => pokemon.id === id)

  return (
    <div className="flex justify-center">
        <button
          className={clsx('flex justify-center w-full px-5 py-2.5 rounded-md bg-slate-200', {
            'bg-red-500 text-white hover:bg-slate-200 hover:text-slate-700': pokemon?.isFav,
            'hover:bg-blue-700 hover:text-white': !((pokemon?.isFav) ?? false)
          })}
          aria-label="Add to favorites"
          title="Add to favorites"
          onClick={() => dispatch(toggleFavorite({ id, name, isFav: !((pokemon?.isFav) ?? false) }))}
        >
          <svg width="1em" height="1em" viewBox="0 0 512 512">
            <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9"></path>
          </svg>
        </button>
      </div>
  )
}
