import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [],
    pokemonDetails: {},
    loadingList: false,
    loadingDetails: false,
    error: null
  }),

  actions: {
    // Fetch para obtener la lista de pokémons
    async fetchPokemonList() {
      this.loadingList = true
      this.error = null // Limpia el error antes de una nueva petición
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=10'
        )
        const data = await response.json()
        this.pokemonList = data.results
      } catch (error) {
        this.error = 'Error al obtener la lista de pokémons'
        console.error(error)
      } finally {
        this.loadingList = false
      }
    },

    // Fetch para obtener los detalles de un pokémon específico
    async fetchPokemonDetails(name) {
      // Revisa si ya tienes los detalles en cache
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
    }
  }
})
