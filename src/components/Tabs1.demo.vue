<demo>Multi-Tabs</demo>
<template>
  <Tabs v-model:selected="currentTab">
    <Tab title="tab1">Tab 1 Content</Tab>
    <Tab title="tab2">Tab 2 Content</Tab>
    <Tab title="Long tab name">Long tab name Content</Tab>
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