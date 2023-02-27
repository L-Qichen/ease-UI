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
      context.emit("update:value", !props.value);
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
  background: #bfbfbf;
  > span {
    position: absolute;
    left: 1px;
    top: 1px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: all 250ms;
  }
  &.checked {
    background: #1890ff;
    > span {
      left: calc(100% - $h2 - 1px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      margin-left: -4px;
    }
  }
}
</style>