<template>
  <div>Tabs component</div>
</template>


<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defualts = context.slots.default();
    defualts.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error(
          "Children's type of Tabs component must be Tab, please check if <Tab> is used."
        );
      }
    });
  },
};
</script>
