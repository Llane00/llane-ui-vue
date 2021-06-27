<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>llane UI</h1>
      <h2>一个超级轻便的UI组件库，开箱即用。</h2>
      <div class="actions">
        <a href="https://github.com/Llane00/llane-ui-vue" class="link-btn">Github</a>
        <router-link to="/doc" class="link-btn">开始</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>
  .actions {
    .link-btn {
      display: inline-block;
      margin-right: 26px;
      padding: 4px 8px;
      background: #eee;
      border-radius: 4px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>