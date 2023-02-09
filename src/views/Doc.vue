<template>
  <topnav />
  <div class="content">
    <aside>
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
    <main>main content</main>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
aside {
  border: 1px solid red;
  background: lightblue;
  width: 12rem;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>