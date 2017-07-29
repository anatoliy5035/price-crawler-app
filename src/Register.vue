<template>
  <div class="container">
    <h4>Registration</h4>
    <form @submit.prevent="verifyEmail()">
      <div class="input-group">
        <input type="email" class="form-control" v-model="emailData" placeholder="Type your email">
        <input type="password" class="form-control" v-model="password" placeholder="Type your password">
      </div>
      <button class="btn btn-default" type="submit">Submit</button>
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
        emailData: '',
        password: ''
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
    width: 100%;
  }

  .form-control {
    margin-bottom: 15px
  }

  .btn {
    margin-bottom: 15px;
  }
</style>
