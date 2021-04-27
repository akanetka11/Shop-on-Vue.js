<template>
  <div class="toCart">
    <div class="toCart-bg">
      <button type="button" @click="$router.push('/cart')">
        <img src="../img/icons8-корзина-50 (1).png" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "toCart",
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
.toCart-bg {
  width: 60px;
  height: 60px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
.toCart img {
  width: 31px;
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
