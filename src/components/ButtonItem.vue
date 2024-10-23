<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="button">
        <p>{{ msg }}</p>
    </div>
</template>

<style scoped>
.button {
    width: 130px;
    height: 45px;
    background-color: #f22539;
    border-radius: 60px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
    background-color: #c71d31;
    transform: scale(1.05);
}

.button:active {
    background-color: #a31628;
    transform: scale(0.98);
}

.button p {
    margin: 0;
    padding: 0;
}
</style>
