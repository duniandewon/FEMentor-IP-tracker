<script setup lang="ts">
import { ref } from "vue";

import { storeToRefs } from "pinia";
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";

import { useIpAddressStore } from "../store/ipAddressStore";

import "leaflet/dist/leaflet.css";

const store = useIpAddressStore();

const { country } = storeToRefs(store);

const zoom = ref(15);
</script>

<template>
  <div class="map" style="height: 100%">
    <l-map ref="map" v-model:zoom="zoom" :center="[country.lat, country.lng]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="[country.lat, country.lng]"></l-marker>
    </l-map>
  </div>
</template>
