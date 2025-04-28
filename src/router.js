import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "/search",
    component: () => import("./pages/Search.vue"),
  },
  {
    path: "/book/:id",
    component: () => import("./pages/Book.vue"),
  },
  {
    path: "/favorites",
    component: () => import("./pages/Favorites.vue"),
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
