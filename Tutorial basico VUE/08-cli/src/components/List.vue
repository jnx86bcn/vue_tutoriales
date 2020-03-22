<template>
	<div>
		<ul class="list-group">
			<li
				v-for="(fruit, index) of sortFruits"
				v-on:click.prevent="addFruit(index)"
				:key="fruit.id"
				class="list-group-item d-flex justify-content-between align-items-center"
			>
				{{ index }} - {{ fruit.name }}
				<span class="badge badge-primary badge-pill">{{ fruit.quantity }}</span>
			</li>
		</ul>
		<button class="btn btn-danger btn-block" v-on:click="resetQuantit">
			Reset
		</button>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';

	export default {
		name: 'List',
		computed: {
			...mapState(['fruits']),
			sortFruits() {
				return this.fruits.sort((a, b) => b.quantity - a.quantity);
			}
		},
		methods: {
			...mapMutations(['addFruit', 'resetQuantit'])
		}
	};
</script>
