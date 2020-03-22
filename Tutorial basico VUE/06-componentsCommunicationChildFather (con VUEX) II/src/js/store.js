const store = new Vuex.Store({
  state: {
    numberStore: 0
  },
  mutations: {
    addNumber(state) {
      state.numberStore++;
    },
    subNumber(state, n) {
      state.numberStore -= n;
    }
  }
});
