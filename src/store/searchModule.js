export default {
  state: {
    query: "",
  },
  mutations: {
    setQuery(state, payload) {
      state.query = payload;
    }
  },
  actions: {},
  getters: {
    getQuery(state) {
      return state.query;
    },
  },
};
