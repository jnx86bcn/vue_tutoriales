<template>
	<div>
		<h1>Photos galery</h1>
		<div>
			<router-link
				:to="{ name: 'Photo', params: { id: photo.id } }"
				v-for="(photo, index) of photos"
				:key="index"
				>{{ photo.name }}</router-link
			>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				photos: [
					{ id: 1, name: 'Photo1' },
					{ id: 2, name: 'Photo2' },
					{ id: 3, name: 'Photo3' },
					{ id: 4, name: 'Photo4' },
					{ id: 5, name: 'Photo5' },
					{ id: 6, name: 'Photo6' }
				]
			};
		}
	};
</script>
