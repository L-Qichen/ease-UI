<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="clickButton">Source Code</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  props: {
    component: Object,
  },
  components: {
    Button,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const codeVisible = ref(false);
    const clickButton = () => {
      codeVisible.value = !codeVisible.value;
    };
    return { Prism, html, codeVisible, clickButton };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
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