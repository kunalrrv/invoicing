<template>
	<!-- Modal -->
	<div class="modal fade" id="edit-information" tabindex="-1" role="dialog" aria-labelledby="edit-information-label" aria-hidden="true" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="edit-information-label">Edit Customer Information</h5>
					<button type="button" class="close" @click="secondaryAction" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					
					<form>
						<div class="form-group row">
							<label class="col-sm-2 col-form-label">Name</label>
							<div class="col-sm-10">
								<input type="text" v-model="updatedModel.name" class="form-control-plaintext">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-2 col-form-label">Email</label>
							<div class="col-sm-10">
								<input type="text" v-model="updatedModel.email" class="form-control-plaintext">
							</div>
						</div><div class="form-group row">
							<label class="col-sm-2 col-form-label">Channel</label>
							<div class="col-sm-10">
								<input type="text" v-model="updatedModel.channel" class="form-control-plaintext">
							</div>
						</div>
					</form>

				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="secondaryAction">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
export default  {
	name: 'CustomerEditModal',
	data() {
		return {
			model: {
				name: this.customer.name,
				email: this.customer.email,
				channel: this.customer.channel,
				address: this.customer.address,
				postal: this.customer.postal,
				city: this.customer.city,
				province: this.customer.province,
				country: this.customer.country
			},
			updatedModel: {
				name: '',
				email: '',
				channel: '',
				address: '',
				postal: '',
				city: '',
				province: '',
				country: ''
			}
		}
	},
	props: {
		customer: {
			type: Object,
			default: null
		}
	},
	mounted () {
		if ( this.model ) {
			Object.assign(this.updatedModel, this.model)
		}
	},
	methods: {
		primaryAction () {

		},
		/**
		 * @description Method to carry out the functions for seconday button click. 
		 * - Closes the Modal.
		 */
		secondaryAction () {
			$('#edit-information').modal('hide')
		}
	}
}
</script>

<style scoped lang="scss">
</style>
