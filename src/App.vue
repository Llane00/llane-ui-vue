<template>
  <router-view />
</template>

<script>
import { ref, provide } from 'vue';
import router from './router'

export default {
  name: 'App',
  setup() {
    const clientWidth = document.documentElement.clientWidth;
    const menuVisible = ref(clientWidth>500);
    provide('menuVisible', menuVisible);

    router.afterEach((to, from) => {
      if (clientWidth <= 500) {
        menuVisible.value = false;
      }
    })
  }
}
</script>