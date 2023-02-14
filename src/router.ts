import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogueDemo from './components/DialogueDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import WelcomeDocs from './components/WelcomeDocs.vue'

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: '', component: WelcomeDocs },
        { path: 'switch', component: SwitchDemo },
        { path: 'Button', component: ButtonDemo },
        { path: 'Dialogue', component: DialogueDemo },
        { path: 'Tabs', component: TabsDemo }
      ]
    }
  ]
});