import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    income: 0,
  },
  mutations: {
    SET_INCOME(state, income) {
      state.income = income
    }
  },
  actions: {},
  modules: {}
});
