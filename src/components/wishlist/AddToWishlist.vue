<template>
  <div id="wishlist">
    <img src="../img/icons8-сердце-16.png" />
    <h2>
      Wishlist
    </h2>
  </div>
</template>
<script>
export default {
  name: "AddToWishlist",
};
</script>
<style>
#wishlist {
  background: #e3e3e3;
  width: 215px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#wishlist h2 {
  margin-left: 6px;
  color: #2a2e30;
  font-size: 16px;
}
#wishlist img {
  width: 17px;
  height: 13px;
  padding: 0;
}
</style>
