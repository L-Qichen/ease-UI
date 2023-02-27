<template>
  <div>
    <Button> Default </Button>
    <Button theme="button"> Button </Button>
    <Button theme="link"> Link Button </Button>
    <Button theme="text"> Text Button </Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
</style>
