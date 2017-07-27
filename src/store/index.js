import Vue from 'vue';
import Vuex from 'vuex';
import { Validator } from 'vee-validate';

Vue.use(Vuex);

const dict = {
    en: {
        custom: {
            urlAddress: {
                required: 'Please enter url in input',
                url: 'Please enter a valid url in input'
            }
        }
    }
};

Validator.updateDictionary(dict);

export default new Vuex.Store({
    state: {
        oldInputValue: '',
        preloader: false,
        responseData: {},
        serverErrorText: ''
    },
    mutations: {
        pushServerText(state, res) {
            if (res.status === 200) {
                state.responseData = res.body;
                state.serverErrorText = false;
            } else {
                state.serverErrorText = res.bodyText;
            }
        },

        setOldInput(state, val) {
            state.oldInputValue = val;
        },

        setPreload(state, val) {
            state.preloader = val;
        }
    },
    getters: {
        getServerText(state) {
            return state.responseData;
        },
        getOldInputValue(state) {
            return state.oldInputValue;
        },
        getServerErrorText(state) {
            return state.serverErrorText;
        },
        getPreload(state) {
            return state.preloader;
        }
    },
    actions: {
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
        },

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
    }
})
