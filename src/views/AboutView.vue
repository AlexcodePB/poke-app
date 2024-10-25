<script setup>
import ButtomBar from '@/components/ButtomBar.vue'
import CardItem from '@/components/CardItem.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import { computed, onMounted, ref } from 'vue'
import { usePokemonStore } from '../stores/pokemonStore'

const pokemonStore = usePokemonStore()
const isLoading = ref(true)
const showFavorites = ref(false)

onMounted(async () => {
  await pokemonStore.fetchPokemonList()
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
})
const displayedPokemonList = computed(() => {
  return showFavorites.value
    ? pokemonStore.activePokemons.map(name =>
        pokemonStore.pokemonList.find(pokemon => pokemon.name === name)
      )
    : pokemonStore.pokemonList
})
function setActiveButton(button) {
  showFavorites.value = button === 'Favorites'
}
</script>

<template>
  <div v-if="isLoading" class="loader-container">
    <img src="../assets/Loader.png" alt="Cargando..." class="loader" />
  </div>

  <div class="about" v-else>
    <div class="filtro">
      <SearchComponent />
    </div>
    <div class="container-cards">
      <CardItem
        v-for="item in displayedPokemonList"
        :key="item.name"
        :title="item.name"
      />
    </div>
    <ButtomBar @set-active="setActiveButton" />
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader {
  width: 106px;
  height: 106px;
  animation: rotate 1.5s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.about {
  min-height: 100vh;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.filtro {
  position: sticky;
  top: 0;
}

.container-cards {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-filzl, minmax(300px, 1fr));
  gap: 0.5rem;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
