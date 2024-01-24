import Image from 'next/image'
import Link from 'next/link'
import { AddFavoriteButton } from './client/add-favorite-button'

interface Props {
  id: string
  name: string
}

export const PokemonCard = ({ id, name }: Props) => {
  return (
    <div
      className="flex flex-col w-48 p-4 rounded-md border border-slate-800 bg-white text-gray-700 hover:bg-slate-300"
    >
      <Link
        href={`/dashboard/pokemons/${name}`}
        className="flex items-center justify-center h-32 border border-slate-800 overflow-hidden rounded-md bg-slate-200 text-gray-700">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`pokemon-${10}`}
          width={100}
          height={100}
        />
      </Link>
      <h4 className="mb-2 text-2xl font-semibold text-center capitalize">
        {name}
      </h4>
      <AddFavoriteButton id={id} name={name} />
    </div>
  )
}
