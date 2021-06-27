<template>
  <div>
    <Topnav />
    <div class="content">
      <aside>
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
      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'

export default {
  components: {
    Topnav
  }
}
</script>

<style lang="scss">
  .content {
    position: fixed;
    top: 3.6rem;
    left: 0;
    display: flex;
    justify-content: space-between;

    aside {
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
      margin: 0 auto;
      padding: 0 1.5rem 4rem;
      max-width: 48rem;
    }
  }
</style>