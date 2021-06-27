<template>
  <div class="topnav">
    <div class="logo"></div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
}
</script>

<style lang="scss" scoped>
  .topnav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .7rem 1.5rem;
    height: 3.6rem;
    border-bottom: 1px #eee solid;
    box-sizing: border-box;

    .menu {
      display: flex;

      li {
        margin-left: 1rem;
      }
    }
  }
</style>