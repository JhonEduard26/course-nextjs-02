import type { Metadata } from 'next'
import { getPokemonById, getPokemons } from '@/services/pokeapi/pokemons'
import { PokemonDetail } from '@/pokemons'

interface Props {
  params: { name: string }
  searchParams: Record<string, string | string[] | undefined>
}

export async function generateStaticParams () {
  const pokemons = await getPokemons(151, 0)

  return pokemons.map(({ name }) => ({ name }))
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  const id = params.name

  const pokemonResponse = await getPokemonById(id)

  return {
    title: pokemonResponse.name
  }
}

export default async function Page ({ params, searchParams }: Props) {
  const pokemon = await getPokemonById(params.name)

  return (
    <PokemonDetail {...pokemon} />
  )
}
