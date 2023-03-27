<demo>Link Buttons</demo>
<template>
  <Button theme="link" size="large"> Large Link</Button>
  <Button theme="link" size="normal"> Link Button </Button>
  <Button theme="link" size="small"> Small Link</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>