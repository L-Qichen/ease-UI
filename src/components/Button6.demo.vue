<demo>Text Buttons</demo>
<template>
  <Button theme="text" size="large"> Large Text</Button>
  <Button theme="text" size="normal"> Text Button </Button>
  <Button theme="text" size="small"> Small Text</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>