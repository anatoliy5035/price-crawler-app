<template>
	<div id="app">
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
    <router-view></router-view>
	</div>
</template>

<script>

export default {
	name: 'app',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
		}
	},
	methods: {

	},
	components: {

	}
}
</script>

<style src="./assets/css/style.css"></style>
