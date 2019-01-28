import Vue from "vue";
import Vuex from "vuex";
import * as Api from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentForm: {}
  },
  getters: {
    currentForm: state => {
      return state.currentForm;
    }
  },
  mutations: {
    UPDATE_FORM(state, { name, value }) {
      if (!name || !value) {
        return;
      }
      if (state.currentForm.hasOwnProperty(name)) {
        state.currentForm[name] = value;
      } else {
        Vue.set(state.currentForm, name, value);
      }
    },
    CLEAR_FORM(state) {
      state.currentForm = {};
    }
  },
  actions: {
    checkEmail({ dispatch }, payload) {
      return new Promise(resolve => {
        Api.checkEmail({ email: payload.value }, exist => {
          dispatch("updateForm", payload);
          resolve(exist);
        });
      });
    },
    updateForm({ commit }, payload) {
      commit("UPDATE_FORM", payload);
    },
    clearForm({ commit }) {
      commit("CLEAR_FORM");
    }
  }
});
