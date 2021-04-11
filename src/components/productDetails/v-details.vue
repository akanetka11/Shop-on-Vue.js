<template>
  <div class="v-details">
    <img :src="product_data.image" />
    <p class="description" style="font-size: 15px;">
      ${{ product_data.description }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style></style>
