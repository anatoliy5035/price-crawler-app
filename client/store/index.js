import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
            component.$validator.validateAll().then(result => {
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