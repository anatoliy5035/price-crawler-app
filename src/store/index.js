import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import authorization from './modules/authorization';
import crawler from './modules/crawler';
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

const state = {
  serverErrorText: ''
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    crawler,
    authorization
  }
})
