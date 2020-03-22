Vue.component('father', {
  template: /*html*/ `
    <div class="p-3 bg-dark text-white">
        <h1><strong>Father Component</strong> number from store from store directly: {{ numberFater }}</h1>
        <h1><strong>Father Component</strong> number from store with mapState: {{ numberStore }}</h1>
        <child></child>
    </div>
    `,
  computed: {
    numberFater() {
      //alternative 1 with store using computed
      return store.state.numberStore;
    },
    //alternative 2 with mapState
    ...Vuex.mapState(['numberStore'])
  }
});
