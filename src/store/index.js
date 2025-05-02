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

export default new Vuex.Store({
  state: {
    isLoading: false,
    totalPages: 0,
    books: [],
    favs: [],
    author: null,
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
    getFavs: (state) => {
      return state.favs;
    },
    author(state) {
      return state.author;
    }
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
    setAuthor(state, payload) {
      state.author = payload;
    }
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
    }
  },
  plugins: [vuexLocalStorage.plugin],
});
