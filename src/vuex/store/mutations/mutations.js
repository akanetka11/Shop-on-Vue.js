export default {
    SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
      state.searchValue = value;
    },
    SET_CATALOG_TO_STATE: (state, catalog) => {
      state.catalog = catalog;
    },
    SET_CART: (state, product) => {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    SET_WISHLIST: (state, product) => {
        let isProductExists = false;
        if (state.cart.length) {
          state.cart.map(function (item) {
            if (item.article === product.article) {
              isProductExists = true;
              item.quantity++
            }
          })
          if (!isProductExists) {
            state.wishlist.push(product)
          }
        } else {
          state.wishlist.push(product)
        }
      },
      REMOVE_FROM_WISHLIST: (state, index) => {
        state.wishlist.splice(index, 1)
      },
    INCREMENT_CART: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT_CART: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    },
      INCREMENT_WISHLIST: (state, index) => {
        state.cart[index].quantity++
      },
      DECREMENT_WISHLIST: (state, index) => {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--
        }
    }
  }
  