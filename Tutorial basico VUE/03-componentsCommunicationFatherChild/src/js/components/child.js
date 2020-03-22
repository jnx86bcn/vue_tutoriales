Vue.component('child', {
  template: /*html*/ `
    <div class="bg-success">
        <h3>Componente hijo</h3>
        <h4>Viene por props: {{ numberProp }}</h4>
    </div>
      `,
  props: ['numberProp']
});
