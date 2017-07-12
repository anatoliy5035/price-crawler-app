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
        serverText: [],
        oldInputValue: '',
        serverErrorText: ''
    },
    mutations: {
        pushServerText(state, res) {
            if (res.status === 200) {
                state.serverText.push(res.body);
            } else {
                state.serverErrorText = res.bodyText;
            }
        },
        setOldInput(state, val) {
            state.oldInputValue = val;
        }
    },
    getters: {
        serverText(state) {
            return state.serverText
        },
        getOldInputValue(state) {
            return state.oldInputValue
        },
        serverErrorText(state) {
            return state.serverErrorText
        }
    },
    actions: {
        getDomainName(context, component) {
           const url = '/getPriceFromUrl';
            component.$validator.validateAll(component.scope).then(result => {
                   if (result) {
                       context.commit('setOldInput', component.urlData);
                       component.$http.post(url, {url: component.urlData})
                           .then(res => {
                               context.commit('pushServerText', res);
                           })
                           .catch(errorResponse => {
                               context.commit('pushServerText', errorResponse);
                           });
                       return;
               }
            return;
           });
        }
    }
})