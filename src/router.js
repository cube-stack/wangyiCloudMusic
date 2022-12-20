import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: { name: "proposal" },
      children: [
        {
          path: "discover",
          name: "discover",
          redirect: { name: "proposal" },
          component: () => import("@/views/discover/index.vue"),
          children: [
            {
              path: "proposal",
              name: "proposal",
              component: () => import("@/views/discover/proposal/index.vue"),
            },
          ],
        },
        {
          path: "playlist",
          name: "playlist",
          component: () => import("@/views/playlist/index.vue"),
        },
        {
          path: "myMusic",
          name: "myMusic",
          component: () => import("@/views/myMusic/index.vue"),
        },
        {
          path: "focus",
          name: "focus",
          component: () => import("@/views/focus/index.vue"),
        },
        {
          path: "supermarket",
          name: "supermarket",
          component: () => import("@/views/supermarket/index.vue"),
        },
        {
          path: "musicer",
          name: "musicer",
          component: () => import("@/views/musicer/index.vue"),
        },
        {
          path: "download",
          name: "download",
          component: () => import("@/views/download/index.vue"),
        },
      ],
    },
  ],
});
