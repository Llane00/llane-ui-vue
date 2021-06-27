<template>
  <router-view />
</template>

<script>
import { ref, provide } from 'vue';

export default {
  name: 'App',
  setup() {
    const clientWidth = document.documentElement.clientWidth;
    const menuVisible = ref(clientWidth>=500);
    provide('menuVisible', menuVisible);
  }
}
</script>