<template>
  <div>
    <h1>Default Buttons</h1>
    <Button size="large"> Large </Button>
    <Button> Default </Button>
    <Button size="small"> small </Button>
    <h1>Link Buttons</h1>
    <Button theme="link" size="large"> Large </Button>
    <Button theme="link" size="normal"> Link Button </Button>
    <Button theme="link" size="small"> Small </Button>
    <h1>Text Buttons</h1>
    <Button theme="text" size="large"> Large </Button>
    <Button theme="text" size="normal"> Text Button </Button>
    <Button theme="text" size="small"> small </Button>
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
