import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

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
  {
    name: "authors",
    path: "/authors/:id",
    component: () => import("./pages/AuthorPage.vue"),
  },
  {
    name: "register",
    path: "/auth/register",
    component: () => import("./pages/RegisterPage.vue"),
  },
  {
    name: "profile",
    path: "/profile",
    component: () => import("./pages/ProfilePage.vue"),
    beforeEnter: (_to, _form, next) => {
      const token = store.getters["getToken"].trim();
      if (!token) next({ name: "register" });
      else next();
    },
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
