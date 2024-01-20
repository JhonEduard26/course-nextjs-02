import { type PokemonResponse } from '@/pokemons'
import { pokeapiUrls } from './urls'

export const getPokemons = async (id?: string, limit = 151, offset = 0) => {
  try {
    const apiUrl = id === undefined ? pokeapiUrls.pokemons.all(limit, offset) : pokeapiUrls.pokemon(id)
    const response = await fetch(apiUrl)

    const data: PokemonResponse = await response.json()

    const pokemons = data.results.map((pokemon) => (
      {
        id: pokemon.url.split('/')[6],
        name: pokemon.name
      }
    ))
    return pokemons
  } catch (error) {
    console.error(error)
    return []
  }
}
