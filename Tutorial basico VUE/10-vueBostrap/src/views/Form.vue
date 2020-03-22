<template>
	<div class="mt-5">
		<h1>Form</h1>
		<form>
			<b-row>
				<b-col md="3">
					<b-form-group label="Input example">
						<b-form-input
							type="text"
							v-model="textoForm"
							:state="checkLength"
						></b-form-input>
						<small>Mímimo 3 caracteres</small>
					</b-form-group>
				</b-col>
				<b-col md="3">
					<b-form-group label="Select example">
						<b-form-select
							v-model="optionSelected"
							:options="options"
						></b-form-select>
						<div class="mt-3">
							Selected: <strong>{{ optionSelected }}</strong>
						</div>
					</b-form-group>
				</b-col>
				<b-col md="3">
					<b-form-group label="Check selections">
						<b-form-checkbox-group
							v-model="optionsSelected"
							:options="optionsCheck"
						></b-form-checkbox-group>
						<div>
							Selected: <strong>{{ optionsSelected }}</strong>
						</div>
					</b-form-group>
				</b-col>
				<b-col md="3">
					<b-form-group label="Radio button example">
						<b-form-radio v-model="checkSelected" value="Horse"
							>Option Horse</b-form-radio
						>
						<div class="mt-3">
							Selected: <strong>{{ checkSelected }}</strong>
						</div>
					</b-form-group>
				</b-col>
			</b-row>
		</form>
		<p>{{ textoForm }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				textoForm: '',
				options: [
					{ value: null, text: 'Select animal' },
					{ value: 'Dog', text: 'Dog' },
					{ value: 'Cat', text: 'Cat' },
					{ value: 'Horse', text: 'Horse' },
					{ value: 'Hipo', text: 'Hipo' }
				],
				optionSelected: null,
				optionsCheck: [
					{ value: 'Dog', text: 'Dog' },
					{ value: 'Cat', text: 'Cat' },
					{ value: 'Horse', text: 'Horse' },
					{ value: 'Hipo', text: 'Hipo' }
				],
				optionsSelected: [],
				checkSelected: ''
			};
		},
		computed: {
			checkLength() {
				return this.textoForm.length > 2 ? true : false;
			}
		}
	};
</script>
