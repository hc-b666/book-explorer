import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  reducer: state => state,
  storage: window.localStorage,
})

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
  plugins: [vuexLocalStorage.plugin],
});
