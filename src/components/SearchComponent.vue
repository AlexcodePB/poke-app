<script setup>
import { ref } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';

const inputValue = ref('');
const isFocused = ref(false);
const pokemonStore = usePokemonStore(); // Cambié el nombre a pokemonStore para evitar confusión

function handleFocus() {
    isFocused.value = true;
}

function handleBlur() {
    if (inputValue.value === '') {
        isFocused.value = false;
    }
}

// Función para manejar el evento de presionar Enter
function handleKeyUp(event) {
    if (event.key === 'Enter') {
        pokemonStore.fetchPokemonDetails(inputValue.value); // Llama a la función con el valor del input
        inputValue.value = ''; // Opcional: limpia el input después de buscar
    }
}
</script>

<template>
    <div class="search">
        <img src="../assets/Search.png" alt="Search Icon" />
        <input type="text" v-model="inputValue" :placeholder="isFocused ? '' : 'Search'" @focus="handleFocus"
            @blur="handleBlur" @keyup="handleKeyUp" />
    </div>
</template>

<style scoped>
.search {
    width: 315px;
    height: 50px;
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: 1rem;
    border-radius: 5px;
    background-color: #FFFFFF;
}

img {
    width: 18px;
    height: 18px;
}

input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: #000;
    background-color: #FFFFFF;
}

input::placeholder {
    position: absolute;
    top: 1px;
}
</style>
