<template>
  <div class="container">
    <h4>Replace password</h4>
    <form @submit.prevent="replacePassword()">
      <div class="input-group">
        <input type="password" class="form-control" v-model="oldPassword" placeholder="Type your old password">
        <input type="password" class="form-control" v-model="newPassword" placeholder="Type your new password">
      </div>
      <div v-show="this.getServerErrorText" class="alert alert-danger">
        {{this.getServerErrorText}}
      </div>
      <button class="btn btn-default" type="submit">Submit</button>
    </form>
    <sweet-modal icon="success" ref="successPasswordReplaced">Password was successful replaced</sweet-modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { SweetModal } from 'sweet-modal-vue';
  export default {
    name: 'passwordReplace',
    data () {
      return {
        oldPassword: '',
        newPassword: ''
      }
    },

    methods: {
      replacePassword() {
        this.$store.dispatch('replacePassword', this);
      }
    },

    computed: {
      ...mapGetters([
        'getServerErrorText'
      ])
    },
    components: {
      SweetModal
    }
  }
</script>

<style scoped>
  .input-group {
    width: 50%;
    margin: 0 auto;
  }

  .form-control {
    margin-bottom: 15px
  }
</style>
