<script setup lang="ts">
import Input from "./components/InputComponent.vue";
import Results from "./components/ResultsComponent.vue";
import Map from "./components/MapComponent.vue";
import Alert from "./components/AlertComponent.vue";
</script>

<template>
  <Alert />
  <main class="main">
    <picture class="picture">
      <source media="(min-width:650px)" srcset="/pattern-bg-desktop.png" />
      <img src="/pattern-bg-mobile.png" alt="pattern background" />
    </picture>
    <section class="content">
      <h1 class="title">IP Address Tracker</h1>
      <Input />
      <Results />
    </section>
    <section class="map">
      <Map />
    </section>
  </main>
</template>

<style scoped>
.main {
  height: 100vh;
}

.picture {
  height: 20rem;
  background-color: lightcoral;
}
.picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 1rem 2rem;
  text-align: center;
  color: #fff;
  position: absolute;
  width: 100%;
  top: 1.2rem;
  z-index: 100;
}

.title {
  margin-bottom: 2.5rem;
}

.map {
  height: calc(100% - 20rem);
  position: relative;
  z-index: 0;
}
</style>
