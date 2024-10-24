<script setup>
import ButtonItem from '../components/ButtonItem.vue';
</script>
<template>
  <main>
    <div class="icon" aria-label="Pokédex icon">
      <img src="../assets/ellipse.png" alt="background" class="background" />
      <img src="../assets/picachu.png" alt="imgPika" class="pika" />
    </div>
    <div class="text_content">
      <h1>Welcome to Pokédex</h1>
      <p>
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
    </div>

    <RouterLink to="/about">
      <ButtonItem msg="Get started" />
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  ;
}

.icon {
  margin-top: 70px;
  position: relative;
  width: 200px;
  height: 200px;
}

.background,
.pika {
  position: absolute;
  top: 0;
  left: -16px;
  z-index: 1;
}

.pika {
  left: -63px;
  top: -67px;
  z-index: 2;
}

.text_content {
  color: black;
  text-align: center;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 30px;
}

.text_content h1 {
  font-size: 24px;
  font-weight: 700;
}

.text_content p {
  color: #5e5e5e;
  font-size: 18px;
  font-weight: 500;
}
</style>
