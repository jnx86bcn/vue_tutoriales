Vue.component('child', {
  template: /*html*/ `
    <div class="p-2 bg-white text-dark">
        <h3>Numbre from store: {{ $store.state.numberStore }}</h3>
        <button class="btn btn-success btn-sm" v-on:click.prevent="$store.commit('addNumber')">+</button>
    </div>`
});
