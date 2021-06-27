<template>
  <div class="topnav">
    <div class="toggleAside" @click="toggleMenu">切换</div>
    <div class="logo">llane-ui</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';

export default {
  setup() {
    const menuVisible = inject<Ref<Boolean>>('menuVisible');

    const toggleMenu = function () {
      menuVisible.value = !menuVisible.value;
    }

    return {
      toggleMenu
    }
  }
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

    .toggleAside {
      display: none;
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
    }

    .logo {
      cursor: pointer;
    }

    .menu {
      display: flex;

      li {
        margin-left: 1rem;
      }
    }

    @media (max-width:500px) {
      > .menu {
        display: none;
      }

      > .toggleAside {
        display: inline-block;
      }
      
      > .logo {
        margin: auto;
      }
    }
  }
</style>