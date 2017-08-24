<template>
  <div class="container">
    <div class="row">
      <h2>Email: {{email}}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cabinet',
    data () {
      return {

      }
    },
    created() {
      this.$store.dispatch('userIdentify', this);
    },
    computed : {
      email() {
        return this.$store.state.authorization.userEmail;
      }
    }
  }
</script>

<style src="../assets/css/style.css"></style>
