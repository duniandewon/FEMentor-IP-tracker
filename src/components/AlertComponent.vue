<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useIpAddressStore } from "../store/ipAddressStore";

const store = useIpAddressStore();

const { error } = storeToRefs(store);

const closeToast = () => store.$patch({ error: "" });
</script>

<template>
  <Transition name="toast">
    <div class="alert" v-if="error">
      <p>{{ error }}</p>
      <button class="close" @click="closeToast">x</button>
    </div>
  </Transition>
</template>

<style scoped>
.alert {
  position: absolute;
  color: #721c24;
  background-color: rgb(248, 215, 218);
  border: 1px solid rgb(245, 198, 203);
  top: 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem 1rem;
  max-width: 35rem;
  top: 1.6rem;
  right: 1rem;
  z-index: 100000;
  border-radius: 10px;
}

.close {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: inherit;
  font-weight: 500;
}

.close:hover {
  color: #000;
}

.toast-leave-to,
.toast-enter-from {
  right: 0;
  transform: translateX(100%);
}

.toast-leave-from,
.toast-enter-to {
  right: 1rem;
  transform: translateX(0);
}

.toast-leave-active,
.toast-enter-active {
  transition: all 0.3s ease-in;
}

/* .toast-leave-from {
}
.toast-leave-to {
}
.toast-leave-active {
} */
</style>
