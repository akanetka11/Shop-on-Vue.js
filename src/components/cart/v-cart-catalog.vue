<template>
  <div class="v-cart-catalog">
    <div>
      <VCart
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      ></VCart>
    </div>
    <div class="priceDetails">
      <h1>Price Details</h1>
      <VCartDetails
        class="cart__details"
        v-for="item in cart_data"
        :key="item.id"
        :cart_details="item"
      >
      </VCartDetails>
      <div class="v-total-price">
        <h1>Total</h1>
        <p>${{ cartTotalCost }}</p>
      </div>
      <button type="button" id="order">
        <h2>Place Order</h2>
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import VCart from "../cart/v-cart-item";
import VCartDetails from "../cart/v-cart-details";
export default {
  name: "v-cart",
  components: {
    VCart,
    VCartDetails,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions(["DELETE_FROM_CART", "INCREMENT", "DECREMENT"]),
    increment(index) {
      this.INCREMENT(index);
    },
    decrement(index) {
      this.DECREMENT(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
  computed: {
    cartTotalCost() {
      let result = [];

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function(sum, el) {
          return sum + el;
        });
        return result.toFixed();
      } else {
        return 0;
      }
    },
  },
};
</script>
<style>
.v-cart-catalog {
  margin-left: 32px;
  display: flex;
}
#remove {
  background: #e3e3e3;
  width: 215px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
#remove:hover {
  background: #c9c6c6b0;
}
#remove h2 {
  margin: 0;
  color: #2a2e30;
  font-size: 16px;
  padding-left: 6px;
}
#remove img {
  width: 17px;
  height: 13px;
  padding: 0;
}
.priceDetails {
  margin-left: 80px;
  width: 368px;
  height: auto;
  max-height: 600px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(34, 41, 47, 0.05);
  border-radius: 8px;
  box-sizing: border-box;
  padding: 20px;
}
.priceDetails h1 {
  font-size: 18px;
  padding-bottom: 20px;
}
.priceDetails .cart__details {
  margin-bottom: 10px;
  font-size: 16px;
}
.v-total-price {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.v-total-price p {
  font-weight: bold;
}
#order {
  background: #5e50f1;
  width: 330px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}
#order:hover {
  background: #5d50f1cc;
}
#order h2 {
  padding-left: 6px;
  margin: 0;
  color: #fff;
  font-size: 16px;
}
</style>
