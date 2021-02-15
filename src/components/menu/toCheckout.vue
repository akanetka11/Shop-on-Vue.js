<template>
  <div class="toCheckout">
    <div class="toCheckout-bg">
      <button type="button" @click="$router.push('/checkout')">
        <img src="../img/icons8-корзина-50 (1).png" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "toCheckout",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>
<style scoped>
.toCheckout-bg {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
}
.toCheckout img {
  width: 33px;
  height: 26px;
}
button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
}
button:active {
  text-decoration: none;
}
</style>
