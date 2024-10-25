<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    required: true
  },
  icon: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['click'])

const emitClick = () => {
  emit('click')
}
</script>

<template>
  <div :class="['button', { active: props.isActive, inactive: !props.isActive }]" @click="emitClick">
    <div v-if="props.icon" class="btn-icon">
      <slot name="button-icon" />
    </div>
    <div class="button-msg">
      <p>{{ props.msg }}</p>
    </div>
  </div>
</template>

<style scoped>
.button {
  min-width: 150px;
  max-width: 195px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.button-msg p {
  margin: 0;
  font-size: 16px;
  color: white;
  font-weight: bold;
}

.active {
  background-color: #f22539;
}

.inactive {
  background-color: #bfbfbf;
  cursor: not-allowed;
}

.active:active {
  background-color: #c00e20;
}
</style>
