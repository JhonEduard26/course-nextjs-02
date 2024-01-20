import { PokemonCard, type SimplePokemon } from '..'

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))
      }
    </div>
  )
}
