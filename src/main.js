import Vue from 'vue';
import vueResource from 'vue-resource';
import App from './App.vue';
import Login from './Login.vue';
import Home from './Home.vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import store from './store/index';

Vue.use(vueResource);
Vue.use(VeeValidate);
Vue.use(VueRouter);


Vue.http.interceptors.push((request, next) => {
	request.headers.set('x-access-token', localStorage.getItem('session'));
	request.headers.set('Accept', 'application/json');
	next();
});

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/home', component: Home },
    { path: '/login', component: Login }
  ]
});

new Vue({
	el: '#app',
    router,
    store,
	  render: h => h(App),
});
