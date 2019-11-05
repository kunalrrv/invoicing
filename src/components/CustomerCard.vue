<template>
	<div class="customer-card text-left">
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">{{customer.name}}</h5>
				<h6 class="card-subtitle mb-3 text-muted">{{customer.email}}</h6>
				<p class="card-text"><b>Address: </b> {{customer.address}}, {{customer.city}} {{customer.postal}}, {{customer.province}} {{customer.country}}</p>
				<button type ="button" class="btn btn-lg btn-warning" data-toggle="modal" :data-target="dataTarget">EDIT</button>
			</div><!--/ card-body -->
		</div><!--/ card -->
		<CustomerEditModal :customer="customer"/>
	</div><!--/ customer-card -->
</template>

<script>
import CustomerEditModal from '@/components/CustomerEditModal.vue'

export default {
	name: 'CustomerCard',
	components: { CustomerEditModal },
	props: {
		customer: {
			type: Object,
			default: null
		}
	},
	computed: {
		/**
		 * @description Computed property to set data target to open the customer info edit modal.
		 */
		dataTarget () {
			return `#modal-${this.customer.id}`
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	margin-top: 20px;
	margin-bottom: 20px;
}
</style>