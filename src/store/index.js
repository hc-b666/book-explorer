import api from "@/api";
import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  reducer: (state) => state,
  storage: window.localStorage,
});

const createToast = (text, status) => ({
  text,
  status,
  id: Math.random() * 1000,
});

export default new Vuex.Store({
  state: {
    isLoading: false,
    totalPages: 0,
    books: [],
    favs: [],
    author: null,
    toasts: [],
  },
  getters: {
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
    async searchBooks({ commit }, payload) {
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
  },
  plugins: [vuexLocalStorage.plugin],
});
