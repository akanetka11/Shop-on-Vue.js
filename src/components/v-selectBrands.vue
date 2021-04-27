<template>
  <div class="select-brands">
    <p class="title-brand" @click="areBrandsVisible = !areBrandsVisible">
      {{ selected }}
    </p>
    <div class="brands" v-if="areBrandsVisible">
      <p v-for="brand in brands" :key="brand.value" @click="selectBrand(brand)">
        {{ brand.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areBrandsVisible: false,
    };
  },
  props: {
    brands: {
      type: Array,
      default() {
        [];
      },
    },
    selected: {
      type: String,
      default() {
        "";
      },
    },
  },
  methods: {
    selectBrand(brand) {
      this.$emit("select", brand);
      this.areBrandsVisible = false;
    },
    hideSelect() {
      this.areBrandsVisible = false;
    },
  },
  mounted() {
    //когда компонент появляется, жизненный цикл
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    //когда компонент будет пропадать
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style>
.v-select p {
  margin: 0;
}
.brands {
  border: 1px solid #5d50f1cc;
  cursor: pointer;
}
.title-brand {
  margin-top: 30px;
  border: 1px solid #5d50f1cc;
}
.select-brands {
  position: absolute;
  top: 40%;
  width: 10%;
}
.brands p:hover {
  background: #938af342;
  margin: 0;
}
</style>
