<template>
	<div id="app">
		<crawler-input></crawler-input>
		<results></results>
	</div>
</template>

<script>
import CrawlerInput from './CrawlerInput.vue';
import Results from './Results.vue';
export default {
	name: 'app',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
		}
	},
	created () {

	},
	methods: {

	},
	components: {
        CrawlerInput,
		Results
	}
}
</script>

<style src="../public/stylesheets/style.css"></style>
