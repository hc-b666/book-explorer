import Vue from "vue";
import Vuex from "vuex";
import bookModule from "./bookModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: bookModule,
});
