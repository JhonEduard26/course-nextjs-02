import { PokemonGrid, type PokemonResponse } from '@/app/pokemons'

const getPokemons = async (limit = 10, offset = 0) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const pokemons: PokemonResponse = await data.json()

  return pokemons.results.map((pokemon) => {
    return {
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
    }
  })
}

export default async function PokemonsPage () {
  const pokemons = await getPokemons(151)

  return (
    <>
      <h1 className="mb-6 text-4xl font-semibold text-center">Pokedex Estática</h1>
      <PokemonGrid pokemons={pokemons} />
    </>
  )
}
