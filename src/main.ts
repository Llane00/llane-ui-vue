import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import './index.css'

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const routes = [
  { path: '/', component: Home }, 
  { path: '/doc', component: Doc }, 
];

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes
});

const app = createApp(App)
app.use(router)
app.mount('#app')
