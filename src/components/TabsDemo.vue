<template>
  <h1>Tabs Component</h1>
  <Tabs v-model:selected="currentTab">
    <Tab title="tab1">Tab 1 Content</Tab>
    <Tab title="tab2">Tab 2 Content</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const currentTab = ref("tab1");
    return { currentTab };
  },
};
</script>