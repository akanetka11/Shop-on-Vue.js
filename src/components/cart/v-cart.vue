<template>
  <div class="cart">
    <div class="menu">
      <toHomepage class="toHomepage"></toHomepage>
      <toCart
        class="toCart"
        v-bind:style="{
          background: activeBackgroundColor,
          borderRadius: activeBorderRadiusOfHomepage,
        }"
      ></toCart>
    </div>
    <div class="main">
      <h1>Checkout</h1>
      <div class="main__wrapper">
        <VCartCatalog :cart_data="CART"></VCartCatalog>
      </div>
      <div class="main__catalog"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VCartCatalog from "../cart/v-cart-catalog";
import toHomepage from "../menu/toHomepage";
import toCart from "../menu/toCart";

export default {
  name: "wishlist",
  components: {
    toHomepage,
    toCart,
    VCartCatalog,
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
  computed: {
    ...mapGetters(["CART"]),
  },

  // computed: {
  //   ...mapGetters({ products: "addToWishlist" }),
  // },
  // created() {
  //   if (!this.$store.state.products.length) {
  //     this.$store.dispatch("getProducts");
  //   }
  // },

  watch: {},
};
</script>
<style scoped>
.cart {
  display: flex;
  margin: 0;
  padding: 0;
  background: #f3f2f7;
  height: auto;
  min-height: 100vh;
}

.menu {
  background: #fff;
}
.main__catalog {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 30px;
}
.main__catalog__product__info {
  width: 212px;
  height: 243px;
  border: none;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
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
.toNextPage {
  display: flex;
  justify-content: center;
}

.main__wrapper {
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  padding-bottom: 50px;
}
.toHomepage {
  position: fixed;
  top: 25px;
  left: 12px;
}
.toCart {
  position: fixed;
  top: 85px;
  left: 12px;
}
</style>
