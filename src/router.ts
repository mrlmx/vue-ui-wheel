import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import NotFound from "./views/NotFound.vue";
import SwitchDoc from "./docs/SwitchDoc.vue";

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
          path: "switch",
          component: SwitchDoc,
        },
        {
          // 不知道为什么，无法使用 "*" 来匹配所有路由
          path: "/doc/:path",
          component: NotFound,
        },
      ],
    },
  ],
});

export default router;
