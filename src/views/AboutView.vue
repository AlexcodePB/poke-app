<script setup>
import { onMounted, computed } from 'vue'
import CardItem from '@/components/CardItem.vue'
import { usePokemonStore } from '../stores/pokemonStore'

// Accede a la store de Pokémon
const pokemonStore = usePokemonStore()

// Llama a la acción para obtener la lista de Pokémon cuando el componente se monte
onMounted(() => {
  pokemonStore.fetchPokemonList()
})

// Computed para obtener la lista de Pokémon desde el estado de la store
const pokemonList = computed(() => pokemonStore.pokemonList)
</script>

<template>
  <div class="about">
    <h2>Pokemons</h2>
    <CardItem
      v-for="item in pokemonList"
      :key="item.name"
      :title="item.name"
    />
  </div>
</template>

<style scope>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
