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
        oldInputValue: ''
    },
    mutations: {
        pushServerText(state, res) {
            state.serverText.push(res);
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
                               context.commit('pushServerText', res.body);
                           });
                       return;
               }
            return;
           });
        }
    }
})