<template>
  <button @click="toggle" :class="{ checked: value }">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("input", !props.value);
    };
    return { toggle };
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
  transition: left 250ms;
}
.checked {
  background: blue;
  > span {
    left: calc(100% - $h2 - 1px);
  }
}
button:focus {
  outline: none;
}
</style>