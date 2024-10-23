<script setup>
import ButtonItem from '../components/ButtonItem.vue';
</script>
<template>
  <main>
    <div class="icon" aria-label="Pokédex icon">
      <img src="../assets/ellipse.png" alt="background" class="background">
      <img src="../assets/picachu.png" alt="imgPika" class="pika">
    </div>
    <div class="text_content">
      <h1>Welcome to Pokédex</h1>
      <p>
        The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
      </p>
    </div>

    <RouterLink to="/pokemon">
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
  left: -15px;
  z-index: 1;
}

.pika {
  left: -63px;
  top: -66px;
  z-index: 2;
}

.text_content {
  text-align: center;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 30px
}



.cta-button:hover {
  background-color: #ffb905;
}

@media (min-width: 1024px) {
  main {
    flex-direction: row;
    text-align: left;
  }

  .text_content {
    margin-right: 2rem;
  }
}
</style>
