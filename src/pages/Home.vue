<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div v-if="customers" class="customer-main-container">
          <div class="row">
            <div class="col" v-bind:key="item.id" v-for="item in customers">
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
      customers:[]
    }
  },
  /**
   * @description Mounted hook for the route component.
   */
  async mounted () {
    return this.$store.dispatch('fetchCustomerInfo').then(response => {
      return this.$store.dispatch('setCustomerInfo', response.data).then(() => {
        this.customers = response.data.customers
      })
    })
  }
}
</script>

<style lang="scss" scoped>

</style>