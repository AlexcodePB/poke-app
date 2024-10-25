<script setup>
import { ref } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';

const inputValue = ref('')
const isFocused = ref(false)
const pokemonStore = usePokemonStore()

function handleFocus() {
    isFocused.value = true
}

function handleBlur() {
    if (inputValue.value === '') {
        isFocused.value = false
    }
}


function handleKeyUp(event) {
    if (event.key === 'Enter') {
        pokemonStore.fetchPokemonDetails(inputValue.value)
        inputValue.value = ''
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
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 5px;
    background-color: #ffffff;
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
    background-color: #ffffff;
}

input::placeholder {
    position: absolute;
    top: 1px;
}
</style>
