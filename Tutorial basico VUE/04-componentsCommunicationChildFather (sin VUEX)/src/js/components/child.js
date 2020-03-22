Vue.component('child', {
  template: /*html*/ `
    <div class="bg-success">
        <h3>Componente hijo</h3>
        <h4>Viene por props: {{ numberProp }}</h4>
        <h4>Nombre variable: {{ nameChild }}</h4>
    </div>
      `,
  props: ['numberProp'],
  data() {
    return {
      nameChild: 'Test',
      numberChild: 0
    };
  },
  mounted() {
    this.$emit('nameChild', this.nameChild);
  }
});
