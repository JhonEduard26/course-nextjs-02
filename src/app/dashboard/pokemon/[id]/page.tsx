import type { Metadata, ResolvingMetadata } from 'next'
import { getPokemonById } from '@/services/pokeapi/pokemons'
import { PokemonDetail } from '@/pokemons'

interface Props {
  params: { id: string }
  searchParams: Record<string, string | string[] | undefined>
}

export async function generateMetadata (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id

  const pokemonResponse = await getPokemonById(id)

  return {
    title: pokemonResponse.name
  }
}

export default async function Page ({ params, searchParams }: Props) {
  const pokemon = await getPokemonById(params.id)

  return (
    <PokemonDetail {...pokemon} />
  )
}
