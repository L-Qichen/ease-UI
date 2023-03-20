import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogueDemo from './components/DialogueDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import WelcomeDocs from './components/WelcomeDocs.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: '', component: WelcomeDocs },
        { path: 'intro', component: Intro },
        { path: 'get-started', component: GetStarted },
        { path: 'install', component: Install },
        { path: 'switch', component: SwitchDemo },
        { path: 'Button', component: ButtonDemo },
        { path: 'Dialogue', component: DialogueDemo },
        { path: 'Tabs', component: TabsDemo }
      ]
    }
  ]
});