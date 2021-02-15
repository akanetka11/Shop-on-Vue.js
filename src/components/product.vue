<template>
  <div class="product">
    <AddToCart></AddToCart>
  </div>
</template>
<script>
import AddToCart from "../components/checkout/AddToCart";
export default {
  name: "product",
  components: {
    AddToCart,
  },
  props: {},
};
</script>
