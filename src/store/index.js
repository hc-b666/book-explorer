import api, { authApi } from "@/api";
import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import isEqual from "lodash/isEqual";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  reducer: (state) => ({
    token: state.token,
    favs: state.favs,
  }),
  storage: window.localStorage,
});

const createToast = (text, status) => ({
  text,
  status,
  id: Math.random() * 1000,
});

export default new Vuex.Store({
  state: {
    token: "",
    isLoading: false,
    totalPages: 0,
    books: [],
    favs: [],
    author: null,
    toasts: [],
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    isLoading(state) {
      return state.isLoading;
    },
    totalPages(state) {
      return state.totalPages;
    },
    books(state) {
      return state.books;
    },
    getFavs(state) {
      return state.favs;
    },
    author(state) {
      return state.author;
    },
    toasts(state) {
      return state.toasts;
    },
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    isLoading(state, payload) {
      state.isLoading = payload;
    },
    setTotalPages(state, payload) {
      state.totalPages = payload;
    },
    setBooks(state, payload) {
      state.books = payload;
    },
    addFav(state, payload) {
      state.favs.push(payload);
    },
    removeFav(state, payload) {
      state.favs = state.favs.filter((_, idx) => idx !== payload);
    },
    setAuthor(state, payload) {
      state.author = payload;
    },
    addToast(state, payload) {
      const { text, status } = payload;
      const toast = createToast(text, status);

      state.toasts.push(toast);
      setTimeout(() => {
        state.toasts = state.toasts.filter((t) => t.id !== toast.id);
      }, 2000);
    },
  },
  actions: {
    async register({ commit }, payload) {
      commit("isLoading", true);
      try {
        await fetch("http://localhost:9999/api/v1/auth/register", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.log(err);
        commit("isLoading", false);
      } finally {
        commit("isLoading", false);
      }
    },

    async login({ commit }, payload) {
      commit("isLoading", true);
      try {
        // its not working with axios
        // const res = await authApi.post(`/auth/register`, payload);
        const res = await fetch("http://localhost:9999/api/v1/auth/login", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        const data = await res.json(); // { token: string }
        commit("setToken", data.token);
      } catch (err) {
        console.log(err);
        commit("isLoading", false);
      } finally {
        commit("isLoading", false);
      }
    },

    async getProfile({ commit, getters }) {
      commit("isLoading", true);
      try {
        // const res = await fetch("http://localhost:9999/api/v1/u/profile", {
        //   method: "GET",
        //   headers: {
        //     "Authorization": `Bearer ${getters["getToken"]}`,
        //   },
        //   // mode: "no-cors",
        // });
        const res = await authApi.get("/u/profile", {
          headers: {
            "Authorization": `Bearer ${getters["getToken"]}`,
          },
        });
        console.log(res);
        // const data = await res.json();
        // console.log(data);
      } catch (err) {
        console.log(err);
        commit("isLoading", false);
      } finally {
        commit("isLoading", false);
      }
    },

    async searchBooks({ commit }, payload) { // { query: string, page: number }
      commit("isLoading", true);
      try {
        const res = await api.get(
          `/search.json?q=${payload.query}&page=${payload.page}`
        );
        commit("setBooks", res.data.docs);
        commit("setTotalPages", Math.ceil(res.data.numFound / 100));
      } catch (err) {
        commit("isLoading", false);
      } finally {
        commit("isLoading", false);
      }
    },

    /**
     * Fetch author by Id
     * @param {string} payload // author id
     */
    async fetchAuthor({ commit }, payload) {
      commit("isLoading", true);
      try {
        const res = await api.get(`/authors/${payload}.json`);
        commit("setAuthor", res.data);
      } catch (err) {
        commit("isLoading", false);
      } finally {
        commit("isLoading", false);
      }
    },
    
    addFavWithToast({ commit, state }, payload) {
      const ok = state.favs.some((fav) => isEqual(fav, payload));
      if (ok) {
        commit("addToast", {
          text: "Already in favorites!",
          status: "warning",
        });
        return;
      }

      commit("addFav", payload);
      commit("addToast", { text: "Added to favorites!", status: "success" });
    },
  },
  plugins: [vuexLocalStorage.plugin],
});
