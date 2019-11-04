<template>
  <div class="customer-card">
    <p>{{customer.name}}</p>
  </div><!--/ customer-card -->
</template>

<script>
export default {
  name: 'CustomerCard',
  props: {
    customer: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>