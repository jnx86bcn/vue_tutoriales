const app = new Vue({
  el: '#app',
  data: {
    title: 'GYM',
    trainings: [],
    newTraining: ''
  },
  methods: {
    addNewTraining() {
      this.trainings.push({
        name: this.newTraining,
        state: false
      });
      this.newTraining = '';
      this.saveOnLocalStorage();
    },
    editTraining(index) {
      this.trainings[index].state = true;
      this.saveOnLocalStorage();
    },
    deleteTraining(index) {
      this.trainings.splice(index, 1);
      this.saveOnLocalStorage();
    },
    saveOnLocalStorage() {
      localStorage.setItem('vue-gym', JSON.stringify(this.trainings));
    }
  },
  created() {
    const dataLS = JSON.parse(localStorage.getItem('vue-gym'));
    this.trainings = dataLS === null ? [] : dataLS;
  }
});
