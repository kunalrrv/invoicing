<template>
	<!-- Modal -->
	<div class="modal fade" :id="modalId" tabindex="-1" role="dialog" aria-labelledby="edit-information-label" aria-hidden="true" data-backdrop="static" data-keyboard="false">
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
								<input type="text" v-model="updatedModel.name" class="form-control">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-2 col-form-label">Email</label>
							<div class="col-sm-10">
								<input type="text" v-model="updatedModel.email" class="form-control">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-2 col-form-label">Channel</label>
							<div class="col-sm-10">
								<input type="text" v-model="updatedModel.channel" class="form-control">
							</div>
						</div>

						<div class="form-group row">
							<label class="col-sm-2 col-form-label">Address</label>
							<div class="col-sm-10">
								<input type="text" v-model="updatedModel.address" class="form-control">
							</div>
						</div>

						<div class="form-group row">
							<label class="col-sm-2 col-form-label">Postal</label>
							<div class="col-sm-10">
								<input type="text" v-model="updatedModel.postal" class="form-control">
							</div>
						</div>

						<div class="form-group row">
							<label class="col-sm-2 col-form-label">City</label>
							<div class="col-sm-10">
								<input type="text" v-model="updatedModel.city" class="form-control">
							</div>
						</div>

						<div class="form-group row">
							<label class="col-sm-2 col-form-label">Province</label>
							<div class="col-sm-10">
								<input type="text" v-model="updatedModel.province" class="form-control">
							</div>
						</div>

						<div class="form-group row">
							<label class="col-sm-2 col-form-label">Country</label>
							<div class="col-sm-10">
								<input type="text" v-model="updatedModel.country" class="form-control">
							</div>
						</div>
						
					</form>

				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" @click="secondaryAction">Close</button>
					<button type="button" class="btn btn-primary" @click="primaryAction"> Save changes</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
import { isEqual } from 'lodash-es'

export default  {
	name: 'CustomerEditModal',
	data() {
		return {
			model: { // Original Model
				id: this.customer.id,
				name: this.customer.name,
				email: this.customer.email,
				channel: this.customer.channel,
				address: this.customer.address,
				postal: this.customer.postal,
				city: this.customer.city,
				province: this.customer.province,
				country: this.customer.country
			},
			updatedModel: { // Modified Model
				id: '',
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
		// Check if model is present, if present
		// then assign the valuse from `modal` to
		//  newly created `updateModel` data property.
    Object.assign(this.updatedModel, this.model)
	},
	computed: {
		/**
		 * @description Computed property `modalId` to differenciate between modals for all the customers.
		 */
		modalId () {
			return `modal-${this.customer.id}`
		}
	},
	methods: {
		/**
		 * @description Method to carry out the functions for primary button click.
		 * - Checks if there is any change between the original Model & the updated Model.
		 * - If there is a change then make a PUT call to the API.
		 * @returns {void}
		 */
		async primaryAction () {
			if (!isEqual(this.updatedModel, this.model)) {
				await this.$store.dispatch('updateCustomerInfo', this.updatedModel).then(async => {
          this.closeModal()
				})
			} else {
				this.closeModal()
			}
		},
		/**
		 * @description Method to carry out the functions for seconday button click. 
		 * - Closes the Modal.
		 * - Check if user has edited any information, if they have then just restore to original.
		 * @returns {void}
		 */
		async secondaryAction () {
			if (!isEqual(this.updatedModel, this.model)) {
				Object.assign(this.updatedModel, this.model)
			}
			this.closeModal()
		},
		/**
		 * @description Function to close the modal.
		 */
		closeModal() {
			$(`#modal-${this.customer.id}`).modal('toggle')
		}
	}
}
</script>

<style scoped lang="scss">
</style>
