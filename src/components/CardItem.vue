<script setup>
import { ref } from 'vue'
import { usePokemonStore } from '../stores/pokemonStore'

const active = ref(false)
const store = usePokemonStore()

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const toggle = () => {
  active.value = !active.value
  store.toggleActivePokemon(props.title)
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ props.title }}</h3>
    </div>
    <div class="card-icon" @click="toggle">
      <div v-if="active">
        <img src="../assets/StarActive.png" alt="star" />
      </div>
      <div v-else>
        <img src="../assets/StarInactive.png" alt="star" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #ffffff;
  border: none;
  border-radius: 5px;
  width: 315px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
}

.card h3 {
  font-size: 22px;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
  margin: 0;
}

.card-icon {
  width: 50px;
  height: 100%;
}
</style>
