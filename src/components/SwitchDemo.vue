<template>
  <h1>Switch Component</h1>
  <Demo :component="Switch1Demo" />
  <Demo :component="Switch2Demo" />
</template>

<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { Switch1Demo, Switch2Demo };
  },
};
</script>