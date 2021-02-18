<template>
  <div class="v-homepage">
    <div class="menu">
      <toHomepage
        v-bind:style="{
          background: activeBackgroundColor,
          borderRadius: activeBorderRadiusOfHomepage,
        }"
      ></toHomepage>
      <toWishlist></toWishlist>
      <toCheckout></toCheckout>
    </div>
    <div class="main">
      <h1>Shop</h1>
      <div class="main__wrapper">
        <div>
          <h2>Filters</h2>
          <filterCategories></filterCategories>
        </div>
        <div class="main__wrapper__products">
          <div>
            <h1>results found</h1>
            <input
              class="searchProduct"
              type="text"
              placeholder="Search Product"
            />
            <div class="main__wrapper__catalog">
              <ul>
                <div class="main__wrapper__catalog__product">
                  <button type="button" class="product__info">
                    <li v-for="product in catalog" :key="product.id">
                      {{ product.title }}
                    </li>
                  </button>
                  <AddToWishlist></AddToWishlist>
                  <AddToCart></AddToCart>
                </div>
              </ul>
            </div>
          </div>
          <div class="toNextPage">
            <button type="button" class="back"></button>
            <div class="nextPage">
              <button
                type="button"
                v-bind:style="{
                  color: activeColor,
                  background: activeBackground,
                  borderRadius: activeBorderRadius,
                  border: activeBorder,
                }"
                class="toPage"
                @click="$router.push('/')"
              >
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
                type="button"
                class="toPage"
                @click="$router.push('/checkout')"
              >
                3
              </button>
            </div>
            <button
              type="button"
              @click="$router.push('/wishlist')"
              class="next"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import toCheckout from "../menu/toCheckout";
import toHomepage from "../menu/toHomepage";
import toWishlist from "../menu/toWishlist";
import filterCategories from "../homepage/filterCategories";
import AddToWishlist from "../wishlist/AddToWishlist.vue";
import AddToCart from "../checkout/AddToCart";
export default {
  name: "v-homepage",
  components: {
    toCheckout,
    toHomepage,
    toWishlist,
    filterCategories,
    AddToWishlist,
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
  computed: {
    ...mapState(["catalog"]),
  },
  methods: {
    changeButton: function() {},
  },
  watch: {},
};
</script>
<style>
.v-homepage {
  display: flex;
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
  padding-left: 32px;
  padding-bottom: 25px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.main h1 {
  margin-top: 0px;
  color: #636363;
}
.main h2 {
  font-size: 24px;
  color: #62606e;
  margin-bottom: 10px;
  margin-top: 0;
}
.main__wrapper {
  padding-top: 25px;
  display: flex;
}
.searchProduct {
  width: 958px;
  height: 44px;
  background-image: url("../img/icons8-поиск-50.png");
  background-repeat: no-repeat;
  background-position-x: 97%;
  background-position-y: 50%;
  background-size: 25px;
  box-shadow: 0px 0px 15px rgba(34, 41, 47, 0.05);
  border-radius: 8px;
  border: none;
  padding: 10px 13px;
  font-size: 16px;
  background: #fff;
  color: #62606e;
}
.searchProduct :active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}
.main__wrapper__products h1 {
  margin-left: 0;
  font-size: 24px;
  margin-bottom: 10px;
}
.main__wrapper__products {
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.toNextPage {
  display: flex;
  justify-content: center;
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
.nextPage .toPage,
.back,
.next {
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
.back {
  margin-right: 5px;
  background: url("../img/icons8-назад-50.png");
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: 20px;
}
.next {
  margin-left: 5px;
  background: url("../img/icons8-больше-чем-50 (1).png");
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: 25px;
}
.product__info {
  width: 212px;
  height: 243px;
  border: none;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
}
.main__wrapper__catalog__product {
  background: #fff;
  width: 212px;
  box-shadow: 0px 0px 15px rgba(34, 41, 47, 0.05);
  border-radius: 8px;
}
.main__wrapper__catalog {
  padding-top: 30px;
}
</style>
