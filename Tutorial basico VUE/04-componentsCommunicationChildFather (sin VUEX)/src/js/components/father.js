Vue.component('father', {
  template: /*html*/ `
    <div class="p-5 bg-dark text-white">
        <h1>Componente padre pasa valor al hijo: {{ numberFather }}</h1>
        <button class="btn btn-danger btn-sm mb-3" v-on:click.prevent="numberFather++">+</button>
        <h3>{{ nameChild }}</h3>
        <child :numberProp="numberFather" @nameChild="nameChild = $event"></child>
    </div>
    `,
  data() {
    return {
      numberFather: 0,
      nameChild: ''
    };
  }
});
