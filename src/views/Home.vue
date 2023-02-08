<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>EASE UI</h1>
      <h2>A perfect Vue UI library.</h2>
      <p class="actions">
        <a href="">Github</a>
        <router-link to="/doc">Get Started</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  background: lightgreen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h/1.2;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>