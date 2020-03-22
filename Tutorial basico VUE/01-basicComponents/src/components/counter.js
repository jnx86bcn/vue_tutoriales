Vue.component('counter', {
  template: /*html*/ `
    <div>
        <button class="btn btn-success btn-sm mb-3" @click.prevent="number++">+</button>
        <h3>{{ number }}</h3>
    </div>
      `,
  data() {
    return {
      number: 0
    };
  }
});
