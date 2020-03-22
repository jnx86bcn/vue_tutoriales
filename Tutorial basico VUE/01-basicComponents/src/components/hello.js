Vue.component('hello', {
  template: /*html*/ `
    <div>
        <h1>{{ saludo }}</h1>
        <h3>TEST</h3>
    </div>
    `,
  data() {
    return {
      saludo: 'Hola desde VUE'
    };
  }
});
