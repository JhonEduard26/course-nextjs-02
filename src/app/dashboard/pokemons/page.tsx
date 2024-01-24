import { PokemonGrid } from '@/pokemons'
import { getPokemons } from '@/services'

export const metadata = {
  title: 'Pokemons',
  description: ''
}

export default async function PokemonsPage () {
  const pokemons = await getPokemons()

  return (
    <>
      <h1 className="mb-6 text-4xl font-semibold text-center">Pokedex Estática</h1>
      <PokemonGrid pokemons={pokemons} />
    </>
  )
}
