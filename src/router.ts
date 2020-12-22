import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import NotFound from "./views/NotFound.vue";
import SwitchDoc from "./docs/SwitchDoc.vue";
import ButtonDoc from "./docs/ButtonDoc.vue";
import ModalDoc from "./docs/ModalDoc.vue";
import TabsDoc from "./docs/TabsDoc.vue";
import Introduce from "./docs/Introduce.vue";
import Install from "./docs/Install.vue";
import Use from "./docs/Use.vue";
import Markdown from "./components/Markdown.vue";
import { h } from "vue";

const loadMD = (fileName) => h(Markdown, {path:`../markdown/${fileName}.md`, key:fileName})

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "introduce",
          component: loadMD("introduce"),
        },
        {
          path: "install",
          component: loadMD("install"),
        },
        {
          path: "use",
          component: loadMD("use"),
        },
        {
          path: "switch",
          component: SwitchDoc,
        },
        {
          path: "button",
          component: ButtonDoc,
        },
        {
          path: "modal",
          component: ModalDoc,
        },
        {
          path: "tabs",
          component: TabsDoc,
        },
        // {
        //   // 不知道为什么，无法使用 "*" 来匹配所有路由
        //   path: "/doc/:path",
        //   component: NotFound,
        // },
      ],
    },
  ],
});

export default router;
