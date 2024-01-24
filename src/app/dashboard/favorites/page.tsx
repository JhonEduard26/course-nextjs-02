import { PokemonGridClient } from '@/pokemons'

export const metadata = {
  title: 'Favorites',
  description: 'Favorites'
}

export default async function FavoritesPage () {
  return (
    <>
      <h1 className="mb-6 text-4xl font-semibold text-center">Favorites</h1>
      <PokemonGridClient />
    </>
  )
}
