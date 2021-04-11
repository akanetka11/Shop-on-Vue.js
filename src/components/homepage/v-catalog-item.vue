<template>
  <div class="v-catalog-item">
    <button
      type="button"
      class="product__info"
      @click="$router.push('/product/:id')"
    >
      <img :src="product_data.image" />
      <p class="price" style="font-size: 15px;">${{ product_data.price }}</p>
      <p class="title" style="font-size: 13px;">{{ product_data.title }}</p>
    </button>
    <button type="button" @click="addProductToCart" id="cart">
      <img src="../img/icons8-тележка-24.png" />
      <h2>
        Add to Cart
      </h2>
    </button>
  </div>
</template>
<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addProductToCart() {
      this.$emit("addProductToCart", this.product_data);
    },
    // getProductDetails() {
    //  return this.$store.getters['products/getProduct'](this.productId);
    // }
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
};
</script>
<style>
#cart {
  background: #5e50f1;
  width: 160px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}
#cart:hover {
  background: #5d50f1cc;
}
#cart h2 {
  padding-left: 6px;
  margin: 0;
  color: #fff;
  font-size: 16px;
}
#cart img {
  width: 16px;
  height: 15px;
  padding: 0;
}
.v-catalog-item {
  margin-right: 30px;
  margin-top: 10px;
}
.product__info {
  width: 160px;
  height: 190px;
  border: none;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 5px;
}
.price .title {
  color: #62606e;
  text-align: left;
  padding-left: 15px;
  padding-top: 6px;
  font-size: 12px;
}
.product__info img {
  width: 160px;
  height: 120px;
}
</style>
