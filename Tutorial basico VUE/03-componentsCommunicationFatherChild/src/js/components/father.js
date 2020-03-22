Vue.component('father', {
  template: /*html*/ `
    <div class="p-5 bg-dark text-white">
        <h1>Componente padre pasa valor al hijo: {{ numberFather }}</h1>
        <button class="btn btn-danger btn-sm mb-3" v-on:click.prevent="numberFather++">+</button>
        <child :numberProp="numberFather"></child>
    </div>
    `,
  data() {
    return {
      numberFather: 0
    };
  }
});
