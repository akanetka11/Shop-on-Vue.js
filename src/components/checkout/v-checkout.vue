<template>
  <div class="checkout">
    <div class="menu">
      <toHomepage></toHomepage>
      <toWishlist></toWishlist>
      <toCheckout
        v-bind:style="{
          background: activeBackgroundColor,
          borderRadius: activeBorderRadiusOfHomepage,
        }"
      ></toCheckout>
    </div>
    <div class="main">
      <h1>Checkout</h1>
      <div class="priceDetails">
        <h1>
          Price Details
        </h1>
        <button type="button">Place Order</button>
      </div>
      <div class="toNextPage">
        <button
          type="button"
          @click="$router.push('/wishlist')"
          class="back"
        ></button>
        <div class="nextPage">
          <button type="button" class="toPage" @click="$router.push('/')">
            1
          </button>
          <button
            type="button"
            class="toPage"
            @click="$router.push('/wishlist')"
          >
            2
          </button>
          <button
            v-bind:style="{
              color: activeColor,
              background: activeBackground,
              borderRadius: activeBorderRadius,
              border: activeBorder,
            }"
            type="button"
            class="toPage"
            @click="$router.push('/checkout')"
          >
            3
          </button>
        </div>
        <button
          type="button"
          @click="$router.push('/checkout')"
          class="next"
        ></button>
      </div>
    </div>
  </div>
</template>
<script>
import toCheckout from "../menu/toCheckout";
import toHomepage from "../menu/toHomepage";
import toWishlist from "../menu/toWishlist";
export default {
  name: "checkout",
  components: {
    toCheckout,
    toHomepage,
    toWishlist,
  },
  props: {},
  data: function() {
    return {
      activeBackground: "#7367f0",
      activeColor: "#fff",
      activeBorderRadius: "25px",
      activeBorder: "1px solid #7367f0",
      activeBackgroundColor: "#f5f5f5",
      activeBorderRadiusOfHomepage: "10px",
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>
<style scoped>
.checkout {
  display: flex;
  margin: 0;
  padding: 0;
}
.nextPage {
  width: 100px;
  height: 30px;
  border-radius: 15px;
  background: #f3f2f7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nextPage .toPage {
  border: none;
  cursor: pointer;
  border-radius: 25px;
  border: 1px solid #f3f2f7;
  background: #f3f2f7;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  color: #636363;
}
</style>
