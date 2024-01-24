import { type SimplePokemon } from '@/pokemons'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PokemonState {
  favorites: SimplePokemon[]
}

const initialState: PokemonState = {
  favorites: []
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const index = state.favorites.findIndex(fav => fav.name === action.payload.name)

      if (index === -1) {
        state.favorites.push({
          id: action.payload.id,
          name: action.payload.name,
          isFav: true
        })
        return
      }

      state.favorites.splice(index, 1)
    }
  }
})

export const { toggleFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer
