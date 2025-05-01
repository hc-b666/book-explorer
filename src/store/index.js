import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favs: [],
  },
  getters: {
    getFavs: (state) => {
      return state.favs;
    },
  },
  mutations: {
    addFav(state, payload) {
      state.favs.push(payload);
    },
  },
});
