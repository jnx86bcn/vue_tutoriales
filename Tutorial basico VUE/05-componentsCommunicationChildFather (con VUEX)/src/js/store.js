const store = new Vuex.Store({
  state: {
    numberStore: 0
  },
  mutations: {
    addNumber(state) {
      state.numberStore++;
    }
  }
});
