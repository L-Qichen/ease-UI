<template>
  <h1>Dialogue Component</h1>
  <Demo :component="Dialogue1Demo" />
  <Demo :component="Dialogue2Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialogue1Demo from "./Dialogue1.demo.vue";
import Dialogue2Demo from "./Dialogue2.demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Dialogue1Demo, Dialogue2Demo };
  },
};
</script>
