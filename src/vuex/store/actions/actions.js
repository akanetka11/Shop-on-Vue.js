export default {
  GET_SEARCH_VALUE_TO_VUEX({ commit }, value) {
    commit("SET_SEARCH_VALUE_TO_VUEX", value);
  },
  ADD_TO_CART({ commit }, product) {
    commit("SET_CART", product);
  },
  ADD_TO_WISHLIST({ commit }, product) {
    commit("SET_WISHLIST", product);
  },
  INCREMENT_CART_ITEM({ commit }, index) {
    commit("INCREMENT", index);
  },
  DECREMENT_CART_ITEM({ commit }, index) {
    commit("DECREMENT", index);
  },
  DELETE_FROM_CART({ commit }, index) {
    commit("REMOVE_FROM_CART", index);
  },
  INCREMENT_WISHLIST_ITEM({ commit }, index) {
    commit("INCREMENT", index);
  },
  DECREMENT_WISHLIST_ITEM({ commit }, index) {
    commit("DECREMENT", index);
  },
  DELETE_FROM_WISHLIST({ commit }, index) {
    commit("REMOVE_FROM_WISHLIST", index);
  },
};
