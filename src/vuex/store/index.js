import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    catalog: [],
  },
  getters: {
    getProducts(state) {
      return state.catalog.filter((item) => {
        return item;
      });
    },
  },
  actions: {
    getCatalog({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          commit("setCatalog", response.catalog);
        });
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.catalog = payload;
    },
  },
});
