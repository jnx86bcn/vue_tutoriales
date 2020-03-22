const store = new Vuex.Store({
  state: {
    numberStore: 0,
    cursesStore: []
  },
  mutations: {
    addNumber(state) {
      state.numberStore++;
    },
    subNumber(state, n) {
      state.numberStore -= n;
    },
    fillCurses(state, cursesAction) {
      state.cursesStore = cursesAction;
    }
  },
  actions: {
    async getCurses({ commit }) {
      const data = await fetch('../source/curses.json');
      const curses = await data.json();
      commit('fillCurses', curses);
    }
  }
});
