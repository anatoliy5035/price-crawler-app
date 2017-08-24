import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from './pages/Register.vue';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Confirmed from './pages/Conmirmed.vue';
import Cabinet from './pages/Cabinet.vue';
import store from './store/index';

function guardRoute (route, redirect, next) {
  if (store.state.authorization.isLogged) {
    next();
  } else {
    next('/login');
  }
}

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/register', component: Register },
    { path: '/confirm/:id', component: Confirmed},
    { path: '/login', component: Login },
    { path: '/home', component: Home, meta: { needGuard: true }},
    { path: '/cabinet', component: Cabinet}
  ]
});

router.beforeEach((route, redirect, next) => {
  store.commit('ADD_SERVER_TEXT', null);
  if (route.matched.some(m => m.meta.needGuard)) {
    guardRoute(route, redirect, next);
  } else {
    next();
  }
});
