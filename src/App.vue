<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? 0 : 1);
    provide("menuVisible", menuVisible);
  },
};
</script>
