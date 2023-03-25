<template>
  <h1>Switch Component Demo</h1>
  <div class="demo">
    <h2>Common Use Case</h2>
    <div class="demo-component">
      <Switch v-model:value="bool" />
    </div>
    <div class="demo-actions">
      <Button>Source Code</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
    </div>
  </div>
  <div class="demo">
    <h2>Support Disabled</h2>
    <div class="demo-component">
      <Switch v-model:value="bool" disabled />
    </div>
    <div class="demo-actions">
      <Button>Source Code</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Switch v-model:value="bool" disabled/&gt;</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Switch,
    Button,
  },
  setup() {
    const bool = ref(false);
    return { bool };
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