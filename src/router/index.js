import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Detail from "../pages/Detail.vue";
import DefaultLayout from "../components/layout/DefaultLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    component: DefaultLayout,
    path: "/",
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/meal/:id",
        component: Detail
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
