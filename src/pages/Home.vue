<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div v-if="customers" class="customer-main-container">
          <div class="row">
            <div class="col-lg-4 col-md-12" v-for="(item, index) in customers" :key="index">
              <CustomerCard :customer="item" />
            </div><!--/ col -->
          </div><!--/ row -->
        </div><!--/ customer-main-container -->
      </div><!--/ col-lg-12 -->
    </div><!--/ row -->
  </div><!--/ container -->
</template>

<script>
import CustomerCard from '@/components/CustomerCard.vue'

export default {
  name: 'home',
  components: { CustomerCard },
  data () {
    return {
      customers: []
    }
  },
  /**
   * @description Mounted hook for the route component.
   * - Checks if the store is persisting the customer records.
   * - If not, then proceed to make the API call to get the records.
   */
  async mounted () {
    // Check if store contains the information about the customer from the time we set it initially.
    if (this.$store.state.customers.length <= 0) {
      // If store does not have the customer information, then dispatch to store
      // which maked a GET request to the endpoint provided.
      return await this.$store.dispatch('fetchCustomerInfo').then(async => {
        // Assign the customers data from the store onto the component.
        this.customers = this.$store.state.customers
      }).catch(err => {
        // Log error if any
        console.log("Error: ", err)
      })
    } else {
      // If store already contains the customer information, then assign it onto the component
      // from the store itself to avoid multiple network calls to fetch the data on refresh.
      this.customers = this.$store.state.customers
    }
  }
}
</script>