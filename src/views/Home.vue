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
        <div class="sea">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h1>Built with Vue3</h1>
          <p>Utilizes Vue3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h1>Typescript Enabled</h1>
          <p>Source code written in Typescript</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-code"></use>
          </svg>
          <h1>Easy to Use</h1>
          <p>Flexible customization and expansion</p>
        </li>
      </ul>
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
  padding: 12vh 0 24vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
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
  > .sea {
    background: #015871;
    width: 100vw;
    height: 4vh;
    position: absolute;
    left: 0;
    bottom: 0;
    > .wave {
      background: url("/src/assets/wave.svg") repeat-x;
      width: 640vw;
      height: 22vh;
      position: absolute;
      top: -21vh;
      animation: wave 9s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite
        alternate-reverse;
    }
    > .wave:nth-child(2) {
      top: -22vh;
      animation: wave 9s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite
          alternate-reverse,
        float 9s ease infinite alternate-reverse;
      animation-delay: -0.3s;
    }
  }
}
@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -160vw;
  }
}
@keyframes float {
  0%,
  100% {
    transform: translate(0, 2.5vh);
  }
  50% {
    transform: translate(0, 0.5vh);
  }
}
.features {
  margin: 48px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h1 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>