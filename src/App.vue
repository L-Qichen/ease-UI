<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    Hello
    <router-link to="/">link1</router-link>
    AAA
    <router-link to="/xxx">link2</router-link>
  </div>
  <hr />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
