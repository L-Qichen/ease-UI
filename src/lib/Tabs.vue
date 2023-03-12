<template>
  <div class="ease-tabs">
    <div class="ease-tabs-nav" ref="container">
      <div
        class="ease-tabs-nav-item"
        v-for="(title, index) in titles"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
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
        v-for="(component, index) in defaults"
        :key="index"
        :is="component"
        :class="{ selected: component.props.title === selected }"
      />
    </div>
  </div>
</template>


<script lang="ts">
import Tab from "./Tab.vue";
import { onMounted, onUpdated, ref } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const divs = navItems.value;
      const result = divs.filter((div) =>
        div.classList.contains("selected")
      )[0];
      const { width } = result.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = result.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    };
    onMounted(x);
    onUpdated(x);
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
    return { defaults, titles, selectedTab, navItems, indicator, container };
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
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
