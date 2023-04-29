<script setup lang="ts">
import { ref } from "vue";

import { useIpAddressStore } from "../store/ipAddressStore";

import Arrow from "../icons/ArrowIcon.vue";

const store = useIpAddressStore();

const { getLocation } = store;

const ipOrDomain = ref("");

const handleSubmit = async () => {
  await getLocation(ipOrDomain.value);

  ipOrDomain.value = "";
};
</script>

<template>
  <form class="textbox" @submit.prevent="handleSubmit">
    <input
      type="text"
      class="textbox__input"
      v-model="ipOrDomain"
      placeholder="Search for an IP Address or domain"
    />
    <button class="textbox__icon" type="submit">
      <Arrow />
    </button>
  </form>
</template>

<style scoped>
.textbox {
  display: flex;
  max-width: 30rem;
  margin: 0 auto;
}

.textbox__input {
  flex: 1;
  border-radius: 10px 0 0 10px;
  border: none;
  padding: 1.2rem 0 1.2rem 1.2rem;
  outline: 0;
}

.textbox__icon {
  background-color: #000;
  display: grid;
  place-items: center;
  padding: 0 1.5rem;
  border-radius: 0 10px 10px 0;
  border: 0;
}
</style>
