<template>
  <div>
    <div class="Topnav">
      <div class="logo">logo</div>
      <ul class="menu">
        <li>menu1</li>
        <li>menu2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>EASE UI</h1>
      <h2>A perfect Vue UI library.</h2>
      <p class="actions">
        <a href="">Github</a> ||
        <a href="">Start</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Topnav {
  background: pink;
  display: flex;
  padding: 16px;
  /* justify-content: space-between; */
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>