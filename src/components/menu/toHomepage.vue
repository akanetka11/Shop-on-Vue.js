<template>
  <div class="toHomepage">
    <div class="toHomepage-bg">
      <button type="button" @click="$router.push('/')">
        <img src="../img/icons8-собачья-будка-50 (1).png" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "toHomepage",
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
.toHomepage-bg {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toHomepage img {
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
