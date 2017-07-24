<template>
  <div id="app">
    <crawler-input></crawler-input>
    <div class="container">
      <div class="row">
        {{this.notFoundMessage}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '404',
    data () {
      return {
        notFoundMessage: 'Page not found',
      }
    }
  }
</script>

<style src="../assets/css/style.css"></style>
