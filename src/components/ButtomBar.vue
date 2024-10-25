<script setup>
import { defineEmits, ref } from 'vue'
import ButtonItem from '../components/ButtonItem.vue'

const emit = defineEmits(['set-active'])
const activeButton = ref('All')

function setActiveButton(button) {
  activeButton.value = button
  emit('set-active', button)
}
</script>

<template>
  <div class="bottom-bar">
    <div class="button-all">
      <ButtonItem
        :isActive="activeButton === 'All'"
        msg="All"
        :icon="true"
        @click="setActiveButton('All')"
      >
        <template #button-icon>
          <img src="../assets/Menu.png" alt="All" />
        </template>
      </ButtonItem>
    </div>
    <div class="button-favorites">
      <ButtonItem
        :isActive="activeButton === 'Favorites'"
        msg="Favorites"
        :icon="true"
        @click="setActiveButton('Favorites')"
      >
        <template #button-icon>
          <img src="../assets/Star.png" alt="Favorites" />
        </template>
      </ButtonItem>
    </div>
  </div>
</template>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  background: #ffffff;
  gap: 20px;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.1);
}
</style>
