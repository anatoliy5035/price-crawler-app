<template>
	<div id="app">
    <ul>
      <li>
        <router-link to="/home" v-if="this.getAuthorized">Home</router-link>
      </li>
      <li>
        <router-link to="/login">Sign in</router-link>
      </li>
      <li>
        <router-link to="/signup">Sign up</router-link>
      </li>
    </ul>
    <router-view></router-view>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'app',
	data () {
		return {

		}
	},

  computed: {
    ...mapGetters([
      'getAuthorized'
    ])
  },
	components: {

	},
  mounted() {

  }
}
</script>

<style src="./assets/css/style.css"></style>
