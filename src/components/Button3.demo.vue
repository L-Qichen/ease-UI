<demo>Priority Levels</demo>
<template>
  <div>
    <Button priority="primary"> Primary </Button>
    <Button>Default</Button>
    <Button priority="danger"> Danger </Button>
    <Button theme="link" priority="primary"> Primary Link Button </Button>
    <Button theme="link"> Link Button </Button>
    <Button theme="link" priority="danger"> Danger Link Button </Button>
    <Button theme="text" priority="primary"> Primary Text Button </Button>
    <Button theme="text"> Text Button </Button>
    <Button theme="text" priority="danger"> Danger Text Button </Button>
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

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  > Button {
    width: 31%;
  }
}
</style>