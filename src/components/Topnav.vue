<template>
  <div class="Topnav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </div>
    <svg v-if="isShowToggleAside" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <ul class="menu">
      <li>
        <router-link to="/doc">Components</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    isShowToggleAside: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
$fontColor: #007974;
.Topnav {
  color: $fontColor;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    > svg {
      width: 48px;
      height: 48px;
    }
    max-width: 6rem;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1rem;
    }
  }
  > .toggleAside {
    display: none;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .logo {
      margin: 0 auto;
    }
    > .menu {
      display: none;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>