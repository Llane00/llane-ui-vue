import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocDemo from './components/DocDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/doc', component: Doc , children:[
    { path: '', component: DocDemo },
    { path: 'switch', component: SwitchDemo },
    { path: 'button', component: ButtonDemo },
    { path: 'dialog', component: DialogDemo },
    { path: 'tabs', component: TabsDemo }
  ]}
];

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes
});

export default router