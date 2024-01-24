import { pokeapiUrls } from './urls'
import { notFound } from 'next/navigation'
import { type Pokemon } from '@/lib/types'
import { type PokemonResponse } from '@/pokemons'

export const getPokemons = async (limit = 151, offset = 0) => {
  try {
    const apiUrl = pokeapiUrls.pokemons.all(limit, offset)
    const response = await fetch(apiUrl)

    const data: PokemonResponse = await response.json()

    const pokemons = data.results.map((pokemon) => (
      {
        id: pokemon.url.split('/')[6],
        name: pokemon.name,
        isFav: false
      }
    ))
    return pokemons
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getPokemonById = async (id: string) => {
  try {
    const apiUrl = pokeapiUrls.pokemon(id)
    const response = await fetch(apiUrl)

    const data: Pokemon = await response.json()

    const pokemon = {
      abilities: data.abilities,
      id: data.id,
      name: data.name,
      sprite: data.sprites.other?.dream_world.front_default,
      types: data.types
    }

    return pokemon
  } catch (error) {
    console.error(error)
    notFound()
  }
}
