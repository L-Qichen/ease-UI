<template>
  <div>
    <div class="topnavAndBanner">
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
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-code"></use>
      </svg>
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
$green: #02bcb0;
$fontColor: #007974;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
}
.banner {
  color: $fontColor;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: 8px;
      padding: 8px 24px;
    }
  }
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>