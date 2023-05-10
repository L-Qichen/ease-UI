<template>
  <div class="ease-tabs">
    <div class="ease-tabs-nav" ref="container">
      <div
        class="ease-tabs-nav-item"
        v-for="(title, index) in titles"
        :ref="
          (el) => {
            if (title === selected) selectedItem = el;
          }
        "
        :class="{ selected: title === selected }"
        :key="index"
        @click="selectedTab(title)"
      >
        {{ title }}
      </div>
      <div class="ease-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="ease-tabs-content">
      <component
        class="ease-tabs-content-item"
        :key="current.props.title"
        :is="current"
      />
    </div>
  </div>
</template>


<script lang="ts">
import Tab from "./Tab.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(
        () => {
          const { width } = selectedItem.value.getBoundingClientRect();
          indicator.value.style.width = width + "px";
          const { left: left1 } = container.value.getBoundingClientRect();
          const { left: left2 } = selectedItem.value.getBoundingClientRect();
          const left = left2 - left1;
          indicator.value.style.left = left + "px";
        },
        { flush: "post" }
      );
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error(
          "Children's type of Tabs component must be Tab, please check if <Tab> is used."
        );
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const selectedTab = (title: String) => {
      context.emit("update:selected", title);
    };
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });
    return {
      defaults,
      titles,
      selectedTab,
      selectedItem,
      indicator,
      container,
      current,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.ease-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: -1px;
      height: 3px;
      width: 100px;
      background: $blue;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
