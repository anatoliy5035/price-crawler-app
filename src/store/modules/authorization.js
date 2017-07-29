// initial state
const state = {
  responseData: {},
  authorized: true
};

// getters
const getters = {
  // getServerText: state => state.responseData,
  // getServerErrorText: state => state.serverErrorText,
  getAuthorized: state => state.authorized
};

// actions
const actions = {
  verifyEmail(context, component) {
    const url = '/verifyEmail';
    component.$http.post(url, {email: component.emailData})
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

};

export default {
  state,
  getters,
  actions,
  mutations
}
