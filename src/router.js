import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("./pages/Home.vue"),
  },
  {
    name: "search",
    path: "/search",
    component: () => import("./pages/Search.vue"),
  },
  {
    name: "book-details",
    path: "/book/:id",
    component: () => import("./pages/Book.vue"),
  },
  {
    name: "favorites",
    path: "/favorites",
    component: () => import("./pages/Favorites.vue"),
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
