import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		fruits: [
			{
				name: 'apple',
				quantity: 100
			},
			{
				name: 'orange',
				quantity: 40
			},
			{
				name: 'watermelon',
				quantity: 10
			},
			{
				name: 'melon',
				quantity: 5
			},
			{
				name: 'avocado',
				quantity: 20
			}
		]
	},
	mutations: {
		addFruit(state, index) {
			state.fruits[index].quantity++;
		},
		resetQuantit(state) {
			state.fruits.forEach(item => {
				item.quantity = 0;
			});
			console.log(state.fruits);
		}
	},
	actions: {},
	modules: {}
});
