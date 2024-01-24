'use client'

import { PokemonCard } from '@/pokemons'
import { useAppSelector } from '@/store'

export const PokemonGridClient = () => {
  const pokemons = useAppSelector(state => state.pokemon.favorites)

  return (
    <div className="grid grid-cols-4 gap-6">
      {
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))
      }
    </div>
  )
}
