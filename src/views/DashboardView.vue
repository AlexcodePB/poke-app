<script setup>
import CardItem from '@/components/CardItem.vue'
import { usePokemonStore } from '../stores/pokemonStore'
</script>

<template>
  <div>
    <CardItem
      v-for="item in usePokemonStore().fetchPokemonList"
      :key="item.name"
      :title="item.name"
    />
  </div>
</template>
