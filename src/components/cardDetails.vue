<script setup>
import { defineEmits, defineProps, ref } from 'vue';
import { usePokemonStore } from '../stores/pokemonStore';

const props = defineProps({
    pokemonDetails: {
        type: Object,
        required: true
    },
    show: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['close-popup']);
const active = ref(false);
const store = usePokemonStore();

const closePopup = () => {
    emit('close-popup');
};
const toggle = () => {
    active.value = !active.value;
    store.toggleActivePokemon(props.title);
}
const addToFavorites = () => {
    if (isFavorite()) {
        store.removeActivePokemon(props.title);
    } else {
        store.toggleActivePokemon(props.title);

        const data = `${props.pokemonDetails.name}, ${props.pokemonDetails.height}, ${props.pokemonDetails.weight}, ${props.pokemonDetails.type}`;
        // Copiar el nombre del Pokémon al portapapeles
        navigator.clipboard.writeText(data)
            .then(() => {
                console.log(`${props.pokemonDetails.name} copiado al portapapeles`);
            })
            .catch(err => {
                console.error("Error al copiar al portapapeles: ", err);
            });
    }
}

const isFavorite = () => {
    return store.activePokemons.includes(props.title);
}
</script>

<template>
    <div v-if="show" class="popup-overlay" @click.self="closePopup">
        <div class="popup-content">
            <!-- Botón de cerrar -->
            <button class="close-button" @click="closePopup" aria-label="Cerrar"><img src="../assets/closebtn.png"
                    alt=""></button>

            <!-- Imagen del Pokémon en la parte superior -->
            <div class="pokemon-image">
                <img src="../assets/squartle.png" alt="pokemon">
            </div>


            <!-- Detalles del Pokémon debajo de la imagen -->
            <div class="pokemon-details">
                <p><strong>Name:</strong> {{ pokemonDetails.name }}</p>
                <hr>
                <p><strong>Weight:</strong> {{ pokemonDetails.weight }}</p>
                <hr>
                <p><strong>Height:</strong> {{ pokemonDetails.height }}</p>
                <hr>
                <p><strong>Type:</strong> {{ pokemonDetails.type }}</p>
                <hr>
            </div>

            <div class="pokemon-buttons">
                <ButtonItem msg="Share to my friends" @click="addToFavorites" />
                <div class="card-icon" @click.stop="toggle">
                    <div v-if="active">
                        <img src="../assets/StarActive.png" alt="star" />
                    </div>
                    <div v-else>
                        <img src="../assets/StarInactive.png" alt="star" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    position: relative;
    color: black;
    background: white;
    border-radius: 5px;
    width: 315px;
    height: 506px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: start;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

.pokemon-image {
    background: url('../assets/background.png') no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 220px;
    border-radius: 5px 5px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pokemon-details {
    padding: 0 2rem;
    width: 100%;
    text-align: left;
    line-height: 1.6;
}

.pokemon-details p {
    margin: 0.7rem 0;
    text-transform: capitalize;
    font-size: 1rem;
    color: #333;
}

.pokemon-details p:last-child {
    margin-bottom: 0;
}

.pokemon-details strong {
    color: #000;
    font-weight: bold;
}

.pokemon-details hr {
    width: 100%;
}

.pokemon-buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    gap: 25px;
    margin-bottom: 10px;
}
</style>
