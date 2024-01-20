import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: string
  name: string
}

export const PokemonCard = ({ id, name }: Props) => {
  return (
    <Link
      href={`/dashboard/pokemon/${id}`}
      className="flex flex-col w-48 p-4 rounded-md bg-white text-gray-700 hover:bg-blue-700 hover:text-white"
    >
      <div className="flex items-center justify-center h-32 overflow-hidden rounded-md bg-slate-200 text-gray-700">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`pokemon-${10}`}
          width={100}
          height={100}
        />
      </div>
      <h4 className="mb-2 text-2xl font-semibold text-center">
        {name}
      </h4>
      <div className="flex justify-center">
        <span
          className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-xl font-normal text-transparent antialiased"
        >
          facebook
        </span>
      </div>
    </Link>
  )
}
