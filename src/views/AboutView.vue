<script setup>
import ButtomBar from '@/components/ButtomBar.vue';
import CardItem from '@/components/CardItem.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import { computed, onMounted } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';

const pokemonStore = usePokemonStore()


onMounted(() => {
  pokemonStore.fetchPokemonList()
})


const pokemonList = computed(() => pokemonStore.pokemonList)
</script>

<template>
  <div class="about">
    <div class="filtro">
      <SearchComponent />
    </div>
    <div class="container-cards">
      <CardItem v-for="item in pokemonList" :key="item.name" :title="item.name" />
    </div>
    <ButtomBar />
  </div>
</template>

<style scope>
.about {
  min-height: 100vh;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.filtro {
  margin-top: .5rem;
  margin-bottom: 2.5rem;

}

.container-cards {
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
