import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    products: [],
    wishlist: [],
    cart: [],
    search: "",
  },
  mutations: {
    SET_SEARCH: (state, value) => {
      state.search = value;
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },

    SET_CART: (state, product) => {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function(item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    REMOVE_PRODUCT_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    GET_SEARCH({ commit }, value) {
      commit("SET_SEARCH", value);
    },
    GET_PRODUCTS_FROM_API({ commit }) {
      axios
        .get("http://localhost:3000/products")
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    }, //commit вызывает мутацию
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_PRODUCT_FROM_CART", index);
    },

    INCREMENT({ commit }, index) {
      commit("INCREMENT", index);
    },

    DECREMENT({ commit }, index) {
      commit("DECREMENT", index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products.filter((item, index) => {
        if (index < 9) return item;
      }); //принимает и возвращает products реактивно
    },
    GETPRODUCT: (state) => (id) => {
      // eslint-disable-next-line no-undef
      return _.find(state.all, { id: id });
    },
    CART(state) {
      return state.cart;
    },
    SEARCH(state) {
      return state.search;
    },
  },
});
