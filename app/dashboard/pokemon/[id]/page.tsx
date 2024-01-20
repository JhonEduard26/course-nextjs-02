export default function PokemonPage ({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Hello Pokemon {params.id}</h1>
    </div>
  )
}
