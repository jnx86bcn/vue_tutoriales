<template>
	<div class="mt-5">
		<b-row>
			<b-col cols="12" md="4" lg="4">
				<b-card
					title="Card Title"
					img-src="https://picsum.photos/600/300/?image=25"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 20rem;"
					class="mb-2"
				>
					<b-card-text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
						reprehenderit consectetur accusamus ducimus sed quaerat libero fugit
						incidunt voluptatum veritatis saepe assumenda vitae, similique odit
						hic repudiandae ad est placeat.
					</b-card-text>
					<b-button variant="success" @click="home">Home</b-button>
				</b-card>
			</b-col>
			<b-col cols="12" md="4" lg="4">
				<b-card
					title="Card Title"
					img-src="https://picsum.photos/600/300/?image=25"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 20rem;"
					class="mb-2"
				>
					<b-card-text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
						reprehenderit consectetur accusamus ducimus sed quaerat libero fugit
						incidunt voluptatum veritatis saepe assumenda vitae, similique odit
						hic repudiandae ad est placeat.
					</b-card-text>
					<b-button variant="success" @click="home">Home</b-button>
				</b-card>
			</b-col>
			<b-col cols="12" md="4" lg="4">
				<b-card
					title="Card Title"
					img-src="https://picsum.photos/600/300/?image=25"
					img-alt="Image"
					img-top
					tag="article"
					style="max-width: 20rem;"
					class="mb-2"
				>
					<b-card-text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
						reprehenderit consectetur accusamus ducimus sed quaerat libero fugit
						incidunt voluptatum veritatis saepe assumenda vitae, similique odit
						hic repudiandae ad est placeat.
					</b-card-text>
					<b-button variant="success" @click="home">Home</b-button>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	export default {
		methods: {
			home() {
				this.$router.push('/');
			}
		}
	};
</script>
