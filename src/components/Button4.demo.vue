<demo>Disabled Buttons</demo>
<template>
  <Button disabled>Disabled</Button>
  <Button disabled theme="link">Link Button</Button>
  <Button disabled theme="text">Text Button</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>