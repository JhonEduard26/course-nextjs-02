import { env } from '@/config/env'
import { type Ability, type Type } from '@/lib/types'
import Image from 'next/image'

interface Props {
  abilities: Ability[]
  id: number
  name: string
  types: Type[] | undefined
  sprite: string | undefined
}

export const PokemonDetail = ({ abilities, id, name, sprite, types }: Props) => {
  return (
    <div className="flex justify-center items-center p-20 w-max m-auto rounded-lg bg-slate-900 text-white">
      <div>
        <Image
          src={`${sprite}`}
          width={320}
          height={320}
          alt={name}
        />
      </div>
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-6xl font-bold uppercase">
          <span className="mr-2 text-xl font-medium">#{id}</span>
          {name}
        </h1>
        <div className="flex justify-center gap-x-6 mb-12">
          {
            types?.map((type, idx) => (
              <div key={idx}>
                <Image
                  className="rounded-full overflow-hidden"
                  src={`${env.S3_URL_BUCKET}/pokedex/types/${type.type.name}.webp`}
                  width={120}
                  height={120}
                  alt="pokemon type"
                />
                <p className="text-2xl text-center capitalize">{type.type.name}</p>
              </div>
            ))
          }
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-max p-2 rounded-md bg-white text-slate-800">
            <h2>Ability</h2>
            <p className="text-2xl font-semibold capitalize">
              {
                abilities[0].ability.name
              }
            </p>
          </div>
          <div className="w-max p-2 rounded-md bg-white text-slate-800">
            <h2>Hidden Ability</h2>
            <p className="text-2xl font-semibold capitalize">
              {
                abilities[1]?.ability.name ?? 'None'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
