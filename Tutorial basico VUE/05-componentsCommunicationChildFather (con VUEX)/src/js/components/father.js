Vue.component('father', {
  template: /*html*/ `
    <div class="p-5 bg-dark text-white">
        <h1>Numbre from store: {{ $store.state.numberStore }}</h1>
        <child></child>
    </div>
    `,
  data() {
    return {
      numberFather: 0,
      nameChild: ''
    };
  }
});
