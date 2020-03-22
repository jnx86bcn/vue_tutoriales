const app = new Vue({
  el: '#app',
  data: {
    title: 'Computed properties',
    message: '',
    counter: 0
  },
  computed: {
    backward() {
      return this.message === ''
        ? this.title
            .split('')
            .reverse()
            .join('')
        : this.message
            .split('')
            .reverse()
            .join('');
    },
    color() {
      return {
        'bg-success': this.counter <= 10,
        'bg-warning': this.counter > 10 && this.counter < 20,
        'bg-danger': this.counter >= 20
      };
    }
  }
});
