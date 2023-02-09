<template>
  <div class="Topnav">
    <div class="logo">logo</div>
    <ul class="menu">
      <li>menu1</li>
      <li>menu2</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.Topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  /* justify-content: space-between; */
  > .logo {
    max-width: 6rem;
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