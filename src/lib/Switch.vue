<template>
  <button>
    <span></span>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default {};
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
</style>