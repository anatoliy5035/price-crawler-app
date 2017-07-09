import Vue from 'vue';
import vueResource from 'vue-resource';
import App from './components/App.vue';
import VeeValidate from 'vee-validate';


Vue.use(vueResource);
Vue.use(VeeValidate);

// Vue.http.interceptors.push((request, next) => {
// 	request.headers.set('x-access-token', localStorage.getItem('session'));
// 	request.headers.set('Accept', 'application/json');
// 	next();
// });

new Vue({
	el: '#app',
	render: h => h(App)
});
