<template>
  <div class="v-cart-details">
    <p class="title">{{ cart_details.title }}</p>
    <p class="price">${{ cart_details.price }}</p>
  </div>
</template>
<script>
export default {
  name: "v-cart-details",
  props: {
    cart_details: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {};
  },

  computed: {},
};
</script>
<style>
.v-cart-details {
  display: flex;
  justify-content: space-between;
  border: none;
  padding-bottom: 10px;
}
.v-cart-details .price {
  font-weight: bold;
}
</style>
