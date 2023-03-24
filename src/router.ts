import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogueDemo from './components/DialogueDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import WelcomeDocs from './components/WelcomeDocs.vue'
import Markdown from "./components/Markdown.vue"
import { h } from 'vue'

const history = createWebHashHistory();
const md = fileName => h(Markdown, { path: `../markdown/${fileName}.md`, key: fileName });
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: '', component: WelcomeDocs },
        { path: 'intro', component: md("intro") },
        { path: 'get-started', component: md("get-started") },
        { path: 'install', component: md("install") },
        { path: 'switch', component: SwitchDemo },
        { path: 'Button', component: ButtonDemo },
        { path: 'Dialogue', component: DialogueDemo },
        { path: 'Tabs', component: TabsDemo }
      ]
    }
  ]
});