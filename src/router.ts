import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogueDemo from './components/DialogueDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from "./components/Markdown.vue"
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
import { h } from 'vue'

const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string });
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: md(intro) },
        { path: 'get-started', component: md(getStarted) },
        { path: 'install', component: md(install) },
        { path: 'switch', component: SwitchDemo },
        { path: 'Button', component: ButtonDemo },
        { path: 'Dialogue', component: DialogueDemo },
        { path: 'Tabs', component: TabsDemo }
      ]
    }
  ]
});