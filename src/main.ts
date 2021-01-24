import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'

import test from './components/test.vue'
import aboutMe from './components/aboutMe.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  { path: '/', component: test }, 
  { path: '/HelloWorld', component: HelloWorld }, 
  { path: '/aboutMe', component: aboutMe }
];

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes
});

const app = createApp(App)
app.use(router)
app.mount('#app')
