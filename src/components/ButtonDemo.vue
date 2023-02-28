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
    <h1>Priority Levels</h1>
    <div>
      <dir>
        <Button priority="primary"> Primary </Button>
        <Button>Default</Button>
        <Button priority="danger"> Danger </Button>
      </dir>
      <dir>
        <Button theme="link" priority="primary"> Primary Link Button </Button>
        <Button theme="link"> Link Button </Button>
        <Button theme="link" priority="danger"> Danger Link Button </Button>
      </dir>
      <dir>
        <Button theme="text" priority="primary"> Primary Text Button </Button>
        <Button theme="text"> Text Button </Button>
        <Button theme="text" priority="danger"> Danger Text Button </Button>
      </dir>
    </div>
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
