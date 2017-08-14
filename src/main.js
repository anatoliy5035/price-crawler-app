import Vue from 'vue';
import vueResource from 'vue-resource';
import App from './App.vue';
import Register from './Register.vue';
import Home from './Home.vue';
import Login from './Login.vue';
import Conmirmed from './Conmirmed.vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import store from './store/index';

Vue.use(vueResource);
Vue.use(VeeValidate);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/home', component: Home },
    { path: '/signup', component: Register },
    { path: '/confirm/:id', component: Conmirmed},
    { path: '/login', component: Login },
    { path: '*', redirect: '/home' }
  ]
});

console.log(router)

new Vue({
	el: '#app',
    router,
    store,
	  render: h => h(App)
});
