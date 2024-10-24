<script setup>

defineProps({
  msg: {
    type: String,
    required: true,
  },
  icon: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="button" v-if="icon">
    <!-- Mostrar solo si el icono está presente -->
    <div class="btn-icon">
      <slot name="button-icon" />
    </div>
    <!-- Mensaje del botón -->
    <div class="button-msg">
      <p>{{ msg }}</p>
    </div>
  </div>
  <div class="button" v-else>
    <div class="button-msg">
      <p>{{ msg }}</p>
    </div>

  </div>
</template>

<style scoped>
.button {
  width: 150px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f22539;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.button:active {
  background-color: #C00E20;
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
</style>
