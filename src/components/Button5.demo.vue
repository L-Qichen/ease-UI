<demo>Loading</demo>
<template>
  <Button loading>Loading</Button>
  <Button theme="link" loading>Link</Button>
  <Button theme="text" loading>Text</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>