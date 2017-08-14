<template>
  <h1>{{msg}}</h1>
</template>


<script>
  export default {
    name: 'Confirmed',
    data () {
      return {
        msg: '',
        success: 'Email was confirmed',
        error: 'Email not confirmed'
      }
    },
    mounted() {
      this.$http.post('/confirmEmail', {confirmId: this.$route.params.id})
        .then(function (response) {
           if (response.status === 200) {
              localStorage.setItem('token', response.body.token);
               this.msg = this.success;
           }
        })
        .catch(function (err) {
          this.msg = this.error;
      })
    }
  }
</script>
