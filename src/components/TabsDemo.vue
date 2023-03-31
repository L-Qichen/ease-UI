<template>
  <h1>Tabs Component</h1>
  <Demo :component="Tabs1Demo" />
</template>

<script lang="ts">
import Tabs1Demo from "./Tabs1.demo.vue";
import Demo from "./Demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return { Tabs1Demo };
  },
};
</script>