<template>
  <div id="app">
    <crawler-input></crawler-input>
    <div class="container">
      <div class="row">
        <cart-info></cart-info>
        <results></results>
      </div>
    </div>
  </div>
</template>

<script>
  import CrawlerInput from './components/CrawlerInput.vue';
  import Results from './components/Results.vue';
  import CartInfo from './components/CartInfo.vue';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    components: {
      CrawlerInput,
      CartInfo,
      Results
    }
  }
</script>

<style src="./assets/css/style.css"></style>
