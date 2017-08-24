import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue'
import VeeValidate from 'vee-validate';
import store from './store/index';
import { router } from './router';
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.use(VeeValidate);

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer '+ localStorage.getItem('token'));
  request.headers.set('Accept', 'application/json');
  next()
});

new Vue({
	el: '#app',
    router,
    store,
	  render: h => h(App)
});
