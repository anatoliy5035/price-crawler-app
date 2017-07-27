<template>
  <div class="container">
    <h4>Registration</h4>
    <form @submit.prevent="verifyEmail()">
      <div class="input-group">
        <input type="email" class="form-control" v-model="emailData" placeholder="Type your email">
        <span class="input-group-btn">
          <button class="btn btn-default" type="submit">Submit</button>
        </span>
      </div>
    </form>
    <div v-show="this.getServerErrorText" class="alert alert-danger">
      {{this.getServerErrorText}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
    },

    computed: {
      ...mapGetters([
        'getServerErrorText'
      ])
    },
  }
</script>

<style scoped="">
  .input-group {
    margin-bottom: 25px;
  }
</style>
