<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useIpAddressStore } from "../store/ipAddressStore";

const store = useIpAddressStore();

const { country } = storeToRefs(store);

const { getLocation } = store;

getLocation("");
</script>

<template>
  <div class="results">
    <div class="result">
      <h3 class="result__title">IP Address</h3>
      <p class="result__body">{{ country.ip }}</p>
    </div>
    <div class="result">
      <h3 class="result__title">Location</h3>
      <p class="result__body">{{ country.location }}</p>
    </div>
    <div class="result">
      <h3 class="result__title">Time Zone</h3>
      <p class="result__body">{{ country.timeZone }}</p>
    </div>
    <div class="result">
      <h3 class="result__title">ISP</h3>
      <p class="result__body">{{ country.isp }}</p>
    </div>
  </div>
</template>

<style scoped>
.results {
  background-color: #fff;
  border-radius: 10px;
  color: var(--clr-grey-500);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 73rem;
  margin: 2rem auto 0;
}

.result {
  position: relative;
  padding: 0 2rem;
}

.result__title {
  font-size: 0.8rem;
  text-transform: uppercase;
}

.result__body {
  font-size: 1.5rem;
  color: var(--clr-grey-800);
  font-weight: var(--fw-extra-bold);
}

@media (min-width: 655px) {
  .results {
    text-align: left;
    justify-content: space-between;
  }

  .result__title {
    font-size: 0.8rem;
  }

  .result__body {
    font-size: 1.5rem;
  }
}

@media (min-width: 713px) {
  .results {
    margin: 5rem auto 0;
  }
}
</style>
