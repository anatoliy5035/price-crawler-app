// initial state
const state = {
  responseData: {},
  isLogged: !!localStorage.getItem('token')
};

// getters
const getters = {
  // getServerText: state => state.responseData,
  // getServerErrorText: state => state.serverErrorText,
  getAuthorized: state => state.isLogged
};

// actions
const actions = {
  signUp(context, component) {
    const url = '/signup';
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
        console.log(res);
      })
      .catch(errorResponse => {
        context.commit('pushServerText', errorResponse);
      });
  },
  signIn(context, component) {
    const url = '/signin';
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
        console.log(res);
      })
      .catch(errorResponse => {
        context.commit('pushServerText', errorResponse);
      });
  }
};

// mutations
const mutations = {
  LOGIN_USER (state) {
    state.isLogged = true
  },
  LOGOUT_USER (state) {
    state.isLogged = false
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
