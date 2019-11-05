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
      customers: this.$store.state.customers
    }
  },
  /**
   * @description Mounted hook for the route component.
   * - Checks if the store is persisting the customer records.
   * - If not, then proceed to make the API call to get the records.
   */
  async mounted () {
    return await this.$store.dispatch('fetchCustomerInfo').then(async response => {
      this.customers = this.$store.state.customers
    }).catch(err => {
      console.log("Error: ", err)
    })
  }
}
</script>