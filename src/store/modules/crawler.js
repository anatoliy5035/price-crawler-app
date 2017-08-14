// initial state
const state = {
    oldInputValue: '',
    preloader: false,
    responseData: {}
};

// getters
const getters = {
  getServerText: state => state.responseData,
  getOldInputValue: state => state.oldInputValue,
  // getServerErrorText: state => state.serverErrorText,
  getPreload: state => state.preloader
};

// actions
const actions = {
    getDomainName(context, component) {
        const url = '/getPriceFromUrl';
        component.$validator.validateAll(component.scope).then(result => {
          if (result) {
            context.commit('setOldInput', component.urlData);
            context.commit('setPreload', true);
            component.$http.post(url, {url: component.urlData})
              .then(res => {
                context.commit('pushServerText', res);
                context.commit('setPreload', false);
              })
              .catch(errorResponse => {
                context.commit('pushServerText', errorResponse);
                context.commit('setPreload', false);
              });
          }
       });
    }
};

// mutations
const mutations = {
    setOldInput(state, val) {
        state.oldInputValue = val;
    },

    setPreload(state, val) {
        state.preloader = val;
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}
