<template>
  <h1>Tabs Component</h1>
  <Tabs>
    <Tab title="tab1">Tab 1 Content</Tab>
    <Tab title="tab2">Tab 2 Content</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  components: {
    Tab,
    Tabs,
  },
};
</script>