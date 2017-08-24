// initial state
import {router} from '../../router';

const state = {
  responseData: {},
  userEmail: '',
  isLogged: !!localStorage.getItem('token')
};

// getters
const getters = {
  getAuthorized: state => state.isLogged
};

// actions
const actions = {
  signUp(context, component) {
    const url = '/signUp';
    component.$http.post(url,
      {
        email: component.emailData,
        password: component.password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        component.$refs.successModal.open();
        context.commit('ADD_SERVER_TEXT', null);
      })
      .catch(errorResponse => {
        context.commit('ADD_SERVER_TEXT', errorResponse);
      });
  },

  signIn(context, component) {
    const url = '/signIn';
    component.$http.post(url, {
        email: component.emailData,
        password: component.password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        localStorage.setItem('token', res.body.token);
        context.commit('LOGIN_USER');
        context.commit('ADD_SERVER_TEXT', null);
        router.push('/home');
      })
      .catch(errorResponse => {
        context.commit('ADD_SERVER_TEXT', errorResponse);
      });
  },

  userIdentify(context, component) {
    const url = '/userIdentify';
    component.$http.post(url, {
        email: component.emailData,
        password: component.password
      })
      .then(res => {
          context.commit('USER_IDENTIFIED', res.body.userEmail);
      })
      .catch(err => {
        console.error(err);
    });
  },

  logOut(context, component) {
    const url = '/logOut';
    localStorage.removeItem('token');
    context.commit('LOGOUT_USER');
    router.push('/login');
    // component.$http.post(url);
  }
};

// mutations
const mutations = {
  LOGIN_USER (state) {
    state.isLogged = true;
  },
  LOGOUT_USER (state) {
    state.isLogged = false
  },
  USER_IDENTIFIED (state, userEmail) {
    state.userEmail = userEmail;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
