<template>
  <button type="button" @click="addProductToCart()" id="cart">
    <img src="../img/icons8-сердце-50 (1).png" />
    <h2>
      Cart
    </h2>
  </button>
</template>
<script>
export default {
  name: "AddToCart",
  data: function() {
    return {
      cart: [],
    };
  },
};
</script>
<style></style>
