<template>
  <h1>Switch Component Demo</h1>
  <div class="demo">
    <h2>Common Use Case</h2>
    <div class="demo-component">
      <component :is="Switch1Demo" />
    </div>
    <div class="demo-actions">
      <Button>Source Code</Button>
    </div>
    <div class="demo-code">
      <pre>{{ Switch1Demo.__sourceCode }}</pre>
    </div>
  </div>
  <div class="demo">
    <h2>Support Disabled</h2>
    <div class="demo-component">
      <component :is="Switch2Demo" />
    </div>
    <div class="demo-actions">
      <Button>Source Code</Button>
    </div>
    <div class="demo-code">
      <pre>{{ Switch2Demo.__sourceCode }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const bool = ref(false);
    return { Switch1Demo, Switch2Demo, bool };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 32px;
  > h2 {
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px solid $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px solid $border-color;
  }
}
</style>