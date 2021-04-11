<template>
  <div class="productDetails">
    <div class="menu">
      <toHomepage></toHomepage>
      <toCart></toCart>
      <toCheckout></toCheckout>
    </div>
    <div class="main">
      <h1>Product details</h1>
      <h1>{{ product.id }}</h1>
    </div>
  </div>
</template>
<script>
import toCheckout from "../menu/toCheckout";
import toHomepage from "../menu/toHomepage";
import toCart from "../menu/toCart";
export default {
  name: "checkout",
  components: {
    toCheckout,
    toHomepage,
    toCart,
  },
  props: {},
  data() {
    return {
      product: {
        image: "",
        description: "",
      },
    };
  },
  computed: {
    productId() {
      return +this.$route.params.id;
    },
  },
};
</script>
<style scoped>
.productDetails {
  display: flex;
}
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
  background: #f5f5f5;
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
