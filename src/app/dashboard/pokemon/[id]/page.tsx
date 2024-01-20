import type { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: { id: string }
  searchParams: Record<string, string | string[] | undefined>
}

export async function generateMetadata (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(async (res) => await res.json())

  return {
    title: pokemonResponse.title
  }
}

export default function Page ({ params, searchParams }: Props) {
  return (
    <div>
      <h1>{params.id}</h1>
      <p>Search params: {JSON.stringify(searchParams)}</p>
    </div>
  )
}
