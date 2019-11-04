<template>
  <div class="home">

  </div>
</template>

<script>

export default {
  name: 'home',
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
