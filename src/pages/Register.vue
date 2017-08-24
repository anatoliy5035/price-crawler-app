<template>
  <div class="container">
    <h4>Registration</h4>
    <form @submit.prevent="signUp()">
      <div class="input-group">
        <input type="email" class="form-control" v-model="emailData" placeholder="Type your email">
        <input type="password" class="form-control" v-model="password" placeholder="Type your password">
      </div>
      <div v-show="this.getServerErrorText" class="alert alert-danger">
        {{this.getServerErrorText}}
      </div>
      <button class="btn btn-default" type="submit">Submit</button>
    </form>
    <sweet-modal icon="success" ref="successModal">Email with confirm link was sent to your email</sweet-modal>
  </div>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue';
import { mapGetters } from 'vuex';
  export default {
    data () {
      return {
        emailData: '',
        password: ''
      }
    },

    components: {
      SweetModal
    },

    methods: {
      signUp() {
        this.$store.dispatch('signUp', this);
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
