<template>

  <section class="nav-section">
    <router-link to="/">Home</router-link>
    <div class="split-string">|</div>
    <router-link to="/HelloWorld">HelloWorld</router-link>
    <div class="split-string">|</div>
    <router-link to="/aboutMe">aboutMe</router-link>
  </section>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>