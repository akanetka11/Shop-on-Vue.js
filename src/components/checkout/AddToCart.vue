<template>
  <button type="button" id="cart">
    <img src="../img/icons8-корзина-26.png" />
    <h2>Add to Cart</h2>
  </button>
</template>
<script>
export default {
  name: "AddToWishlist",
};
</script>
<style>
#cart {
  background: #5e50f1;
  width: 215px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}
#cart h2 {
  margin-left: 6px;
  color: #fff;
  font-size: 16px;
}
#cart img {
  width: 16px;
  height: 15px;
  padding: 0;
}
</style>
