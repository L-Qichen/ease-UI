<template>
  <div class="layout">
    <topnav isShowToggleAside class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>Welcome</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">Introduction</router-link>
          </li>
          <li>
            <router-link to="/doc/install">Installation</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">Get Started</router-link>
          </li>
        </ol>
        <h2>Components</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialogue">Dialogue</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 12.5rem;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  color: white;
  background: #015871;
  width: 12rem;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 10;
  > h2 {
    margin-bottom: 4px;
    padding: 0 1rem;
  }
  > ol {
    > li {
      > a {
        padding: 4px 1rem;
        display: block;
      }
      > .router-link-active {
        background: white;
        font-weight: 666;
        color: #015871;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>