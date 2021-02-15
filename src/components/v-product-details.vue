<template>
  <div class="productDetails">
    <div class="menu">
      <toHomepage></toHomepage>
      <toWishlist></toWishlist>
      <toCheckout></toCheckout>
    </div>
    <div class="main">
      <h1>Product details</h1>
      <div class="productDetails">
        <div></div>
        <div></div>
      </div>
      <h1>Related Products</h1>
      <p>People also search for this items</p>
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
  data() {
    return {};
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
.menu {
  width: 90px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main {
  background: #e5e5e5;
  padding-top: 25px;
  width: 100vw;
  height: 100vh;
}
.main h1 {
  margin: 0;
  color: #636363;
  margin-left: 32px;
}
.main h2 {
  font-size: 24px;
  margin-left: 32px;
  color: #62606e;
  margin-bottom: 10px;
  margin-top: 0;
}
.main input {
  margin-bottom: 10px;
}
</style>
