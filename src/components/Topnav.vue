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
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #eee solid;

    .menu {
      display: flex;

      li {
        margin-left: 1rem;
      }
    }
  }
</style>