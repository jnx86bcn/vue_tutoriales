<template>
	<div class="mt-5">
		<h3>Photo number: {{ $route.params.id }}</h3>
		<b-button variant="success" @click="home">Home</b-button>
		<b-button variant="success" @click="backward">Back</b-button>
		<b-button variant="success" @click="forward">Forward</b-button>
	</div>
</template>

<script>
	export default {
		methods: {
			home() {
				this.$router.push('/');
			},
			backward() {
				this.$router.go(-1);
			},
			forward() {
				this.$router.go(1);
			}
		}
	};
</script>
