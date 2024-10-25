import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [],
    pokemonDetails: {},
    loadingList: false,
    loadingDetails: false,
    error: null,
    activePokemons: []
  }),

  actions: {
    async fetchPokemonList() {
      this.loadingList = true
      this.error = null
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json()
        this.pokemonList = data.results
      } catch (error) {
        this.error = 'Error al obtener la lista de pokémons'
        console.error(error)
      } finally {
        this.loadingList = false
      }
    },

    async fetchPokemonDetails(name) {
      if (this.pokemonDetails[name]) {
        return
      }

      this.loadingDetails = true
      this.error = null
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        )
        const data = await response.json()
        this.pokemonDetails = { ...this.pokemonDetails, [name]: data }
      } catch (error) {
        this.error = `Error al obtener los detalles de ${name}`
        console.error(error)
      } finally {
        this.loadingDetails = false
      }
    },
    toggleActivePokemon(name) {
      const index = this.activePokemons.indexOf(name)
      if (index === -1) {
        this.activePokemons.push(name)
      } else {
        this.activePokemons.splice(index, 1)
      }
    }
  }
})
