<script setup>
import ButtomBar from '@/components/ButtomBar.vue';
import CardDetails from '@/components/cardDetails.vue';
import CardItem from '@/components/CardItem.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import { computed, onMounted, ref } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';

const pokemonStore = usePokemonStore();
const isLoading = ref(true);
const showFavorites = ref(false);
const selectedPokemon = ref(null); // Aquí almacenaremos el Pokémon seleccionado
const showPopup = ref(false); // Controlar la visibilidad del popup
const notfound = ref(false)

onMounted(async () => {
  await pokemonStore.fetchPokemonList();
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});

const displayedPokemonList = computed(() => {
  return showFavorites.value
    ? pokemonStore.activePokemons.map(name =>
      pokemonStore.pokemonList.find(pokemon => pokemon.name === name)
    )
    : pokemonStore.pokemonList;
});

function setActiveButton(button) {
  showFavorites.value = button === 'Favorites';
}

// Función que se llamará cuando se seleccione un Pokémon
const handlePokemonSelected = (pokemonDetails) => {
  selectedPokemon.value = pokemonDetails;
  showPopup.value = true;
};

// Función para cerrar el popup
const closePopup = () => {
  showPopup.value = false;
};

if (pokemonStore.pokemonList.length === 0) {
  notfound.value = true
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
    <div v-if="!notfound">
      <h1 style="color: black;">No se encontraron resultados</h1>
    </div>
    <div class="container-cards" v-else>
      <CardItem v-for="item in displayedPokemonList" :key="item.name" :title="item.name"
        @pokemon-selected="handlePokemonSelected" />
    </div>
    <ButtomBar @set-active="setActiveButton" />

    <!-- Componente CardDetails (popup) -->
    <CardDetails v-if="selectedPokemon" :pokemonDetails="selectedPokemon" :show="showPopup" @close-popup="closePopup" />
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
