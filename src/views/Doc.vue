<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from 'vue';

export default {
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject<Ref<Boolean>>('menuVisible');

    return {
      menuVisible
    }
  }
}
</script>

<style lang="scss">
  .content {
    aside {
      position: fixed;
      top: 3.6rem;
      padding: 1.5rem 0;
      width: 20rem;
      text-align: left;
      background: #eee;

      h2 {
        margin: 0;
        padding: .35rem 1.5rem .35rem 1.25rem;
      }

      ol {
        li {
          padding: .35rem 1.5rem .35rem 1.25rem;
          font-size: 1.1rem;
          text-align: left;
        }
      }
    }

    main {
      margin-left: 20rem;
      padding: 3.6rem 1.5rem 4rem;
      max-width: 48rem;

      @media (max-width: 500px) {
        margin-left: 0;
      }
    }
  }
</style>