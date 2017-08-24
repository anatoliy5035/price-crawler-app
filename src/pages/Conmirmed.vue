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
        .then((response) => {
           if (response.status === 200) {
               this.msg = this.success;
           }
        })
        .catch((err) => {
          this.msg = this.error;
      })
    }
  }
</script>
