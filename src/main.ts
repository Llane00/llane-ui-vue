import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import test from './components/test.vue'
import HelloWorld from './components/HelloWorld.vue'

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [{
    path: '/', component: test
  }, {
    path: '/HelloWorld', component: HelloWorld
  }]
});

const app = createApp(App)
app.use(router)
app.mount('#app')
