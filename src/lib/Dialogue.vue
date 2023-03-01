<template>
  <div class="ease-dialogue-overlay"></div>
  <div class="ease-dialogue-wrapper">
    <header>Title</header>
    <main>
      <p>First sentence</p>
      <p>Second sentence</p>
    </main>
    <footer>
      <Button>Confirm</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
