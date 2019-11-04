<template>
  <div class="customer-card text-left">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{customer.name}}</h5>
        <h6 class="card-subtitle mb-3 text-muted">{{customer.email}}</h6>
        <p class="card-text"><b>Address: </b> {{customer.address}}, {{customer.city}} {{customer.postal}}, {{customer.province}} {{customer.country}}</p>
        <button type ="button" class="btn btn-lg btn-warning" data-toggle="modal" data-target="#edit-information">EDIT</button>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="edit-information" tabindex="-1" role="dialog" aria-labelledby="edit-information-label" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="edit-information-label">Edit Customer Information</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            
            <form>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="text" v-model="name" class="form-control-plaintext">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                </div>
              </div>
            </form>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div><!--/ customer-card -->
</template>

<script>
export default {
  name: 'CustomerCard',
  data() {
    return {
      name: this.customer.name,
      email: this.customer.email,
      channel: this.customer.channel,
      address: this.customer.address,
      postal: this.customer.postal,
      city: this.customer.city,
      province: this.customer.province,
      country: this.customer.country
    }
  },
  props: {
    customer: {
      type: Object,
      default: null
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