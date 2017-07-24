<template>
  <div class="container">
    <h4>Registration</h4>
    <form @submit.prevent="verifyEmail()">
      <div class="input-group">
        <input type="email" class="form-control" v-model="emailData" placeholder="Type your email">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Submit</button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        emailData: ''
      }
    },
    methods: {
      verifyEmail() {
        this.$store.dispatch('verifyEmail', this);
      }
    }
  }
</script>
