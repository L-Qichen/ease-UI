<template>
  <button @click="toggle" :class="{ checked: isChecked }">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const isChecked = ref(false);
    const toggle = () => {
      isChecked.value = !isChecked.value;
    };
    return { toggle, isChecked };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 2px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: calc($h/2);
  position: relative;
  background: lightgray;
}
span {
  position: absolute;
  left: 1px;
  top: 1px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: 50%;
}
.checked {
  background: blue;
  > span {
    left: calc(100% - $h2 - 1px);
  }
}
</style>