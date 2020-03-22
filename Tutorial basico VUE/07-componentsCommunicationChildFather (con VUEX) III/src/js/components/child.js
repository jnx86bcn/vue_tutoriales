Vue.component('child', {
  template: /*html*/ `
    <div class="p-2 bg-white text-dark">
        <h3><strong>Child Component</strong> number from store from store directly: {{ numberChild }}</h3>
        <h3><strong>Child Component</strong> number from store with mapState: {{ numberStore }}</h3>
        <div class="p-2">
          <!-- without map -->        
          <button class="btn btn-success btn-sm mb-2" v-on:click.prevent="$store.commit('addNumber')">+</button>
          <button class="btn btn-danger btn-sm mb-2" v-on:click.prevent="$store.commit('subNumber',(2))">-</button>
        </div>
        <div class="p-2">
          <!-- with map -->
          <button class="btn btn-success btn-sm mb-2" v-on:click.prevent="addNumber">+</button>
          <button class="btn btn-danger btn-sm mb-2" v-on:click.prevent="subNumber(2)">-</button>
        </div>
        <div class="p-2">
          <!-- with map -->
          <button class="btn btn-success mb-2" v-on:click.prevent="getCurses">Get curses</button>
        </div>
        <ul v-for="curse of cursesStore" class="list-group">
          <li class="list-group-item">{{ curse.name }}</li>
        </ul>
    </div>`,
  computed: {
    numberChild() {
      //alternative 1 with store using computed
      return store.state.numberStore;
    },
    //alternative 2 with mapState
    ...Vuex.mapState(['numberStore', 'cursesStore'])
  },
  methods: {
    ...Vuex.mapMutations(['addNumber', 'subNumber']),
    ...Vuex.mapActions(['getCurses'])
  }
});
