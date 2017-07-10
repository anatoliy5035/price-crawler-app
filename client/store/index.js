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
        serverText: []
    },
    mutations: {
        pushText(state, res) {
            state.serverText.push(res);
        }
    },
    getters: {
        serverText (state) {
            return state.serverText
        }
    },
    actions: {
        getDomainName(context, component) {
           const url = '/getPriceFromUrl';
            component.$validator.validateAll(component.scope).then(result => {
                   if (result) {
                   component.$http.post(url, {url: component.urlData})
                       .then(res => {
                           context.commit('pushText', res.body);
                       });
                   return;
               }
            return;
           });
        }
    }
})