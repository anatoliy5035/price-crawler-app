<template>
	<div id="app">
    <ul>
      <li>
        <router-link to="/home" v-if="this.getAuthorized">Home</router-link>
      </li>
      <li>
        <router-link to="/cabinet" v-if="this.getAuthorized">Cabinet</router-link>
      </li>
      <li>
        <router-link to="/login" v-if="!this.getAuthorized">Sign in</router-link>
      </li>
      <li>
        <a href="#" @click="this.logOut" v-if="this.getAuthorized">Log Out</a>
      </li>
      <li>
        <router-link to="/register" v-if="!this.getAuthorized">Sign up</router-link>
      </li>
    </ul>
    <router-view></router-view>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from 'vue-router';
export default {
	name: 'app',

	data () {
		return {

		}
	},

  methods: {
    logOut () {
      this.$store.dispatch('logOut', this);
    }
  },

  computed: {
    ...mapGetters([
      'getAuthorized',
      'getServerErrorText'
    ])
  },

	components: {

	}
}
</script>

<style src="./assets/css/style.css"></style>
