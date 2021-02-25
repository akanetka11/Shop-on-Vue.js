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
      <div class="main__catalog">
        <div>
          <ul>
            <div class="main__catalog__product">
              <div class="main__catalog__product__info"></div>
              <div class="main__catalog__product__info__next">
                <removeProduct></removeProduct>
                <AddToWishlist
                  v-bind:style="{
                    background: activeBackground,
                  }"
                ></AddToWishlist>
              </div>
            </div>
          </ul>
        </div>
        <div class="main__price">
          <h1>
            Price Details
          </h1>
          <button type="button" class="placeOrder">Place Order</button>
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
import AddToWishlist from "../wishlist/AddToWishlist";
export default {
  name: "checkout",
  components: {
    toCheckout,
    toHomepage,
    toWishlist,
    removeProduct,
    AddToWishlist,
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
.main__catalog__product {
  display: flex;
  width: 870px;
  height: 190px;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(34, 41, 47, 0.05);
  border-radius: 8px;
}
.main__catalog {
  padding: 30px 53px;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.main__catalog__product__info {
  width: 693px;
}
.main__catalog__product__info__next {
  border-left: 1px solid #e3e3e3;
  box-sizing: border-box;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main__price {
  box-sizing: border-box;
  width: 368px;
  height: 381px;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(34, 41, 47, 0.05);
  border-radius: 8px;
  padding: 32px 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main__price h1 {
  font-size: 18px;
  color: #636363;
  font-weight: bold;
}
.placeOrder {
  background: #5e50f1;
  width: 308px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  color: #fff;
}
</style>
