<template>
  <div class="item"></div>
</template>
<script>
export default {
  name: "item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>
<style scoped></style>
