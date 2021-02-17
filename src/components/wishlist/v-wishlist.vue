<template>
  <div class="wishlist">
    <div class="menu">
      <toHomepage></toHomepage>
      <toWishlist
        v-bind:style="{
          background: activeBackgroundColor,
          borderRadius: activeBorderRadiusOfHomepage,
        }"
      ></toWishlist>
      <toCheckout></toCheckout>
    </div>
    <div class="main">
      <h1>Wishlist</h1>
      <div class="wishCatalog">
        <ul>
          <div class="product">
            <div class="productInfo">
              <li v-for="product in catalog" :key="product.id">
                {{ product.title }}
              </li>
            </div>
            <removeProduct></removeProduct>
            <AddToCart></AddToCart>
          </div>
        </ul>
        <div class="toNextPage">
          <button
            type="button"
            @click="$router.push('/')"
            class="back"
          ></button>
          <div class="nextPage">
            <button type="button" class="toPage" @click="$router.push('/')">
              1
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
              @click="$router.push('/wishlist')"
            >
              2
            </button>
            <button
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
  </div>
</template>
<script>
import toCheckout from "../menu/toCheckout";
import toHomepage from "../menu/toHomepage";
import toWishlist from "../menu/toWishlist";
import removeProduct from "../wishlist/RemoveProduct";
import AddToCart from "../checkout/AddToCart";

export default {
  name: "wishlist",
  components: {
    toCheckout,
    toHomepage,
    toWishlist,
    removeProduct,
    AddToCart,
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
.wishlist {
  display: flex;
  margin: 0;
  padding: 0;
}
.wishCatalog {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 30px;
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
</style>
