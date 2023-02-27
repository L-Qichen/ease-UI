<template>
  <div>
    <Button> Button </Button>
    <Button theme="button"> Button </Button>
    <Button theme="link"> Button </Button>
    <Button theme="text"> Button </Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>
