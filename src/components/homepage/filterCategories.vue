<template>
  <div class="filterCategories">
    <VCategories></VCategories>
    <div class="wrapper">
      <h1>Price</h1>
    </div>
    <div class="filters">
      <div class="prices">
        <input
          v-model.number="minPrice"
          type="number"
          class="minPrice"
          min="0"
          max="1000"
          step="10"
        />
        <input
          v-model.number="maxPrice"
          type="number"
          class="maxPrice"
          min="0"
          max="1000"
          step="10"
        />
      </div>
      <div class="values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>
    <p class="selectedBrand">{{ selected }}</p>
    <VSelectBrands
      :brands="brands"
      @select="selectBrand"
      :selected="selected"
    ></VSelectBrands>
  </div>
</template>
<script>
import VCategories from "../homepage/v-categories";
import VSelectBrands from "../v-selectBrands";
export default {
  name: "v-filterCategories",
  components: {
    VCategories,
    VSelectBrands,
  },
  props: {},
  data: function() {
    return {
      brands: [
        { name: "Insignia™", value: "" },
        { name: "Samsung", value: "" },
        { name: "HP", value: "" },
        { name: "Apple", value: "" },
        { name: "Sony", value: "" },
      ],
      selected: "Select",
      minPrice: 0,
      maxPrice: 1000,
    };
  },
  methods: {
    selectBrand(brand) {
      this.selected = brand.name;
    },
  },
};
</script>
<style>
.filterCategories {
  box-sizing: border-box;
  width: 215px;
  background: #ffffff;
  padding-top: 7px;
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 80px;
  box-shadow: 0px 0px 15px rgba(34, 41, 47, 0.05);
  border-radius: 8px;
  min-height: 550px;
  max-height: 550px;
}
.filterCategories h1 {
  margin-bottom: 20px;
  padding-top: 15px;
  margin-top: 0;
  margin-left: 0;
  color: #636363;
}

.minPrice {
  background: #ffffff;
  border: 1px solid #dad9e0;
  border-radius: 8px;
  width: 60px;
  height: 34px;
  margin-right: 30px;
  padding-left: 5px;
}
.minPrice-placeholder {
  color: #dad9e06e;
}
.maxPrice:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}
.minPrice:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}
.maxPrice {
  background: #ffffff;
  border: 1px solid #dad9e0;
  border-radius: 8px;
  width: 60px;
  height: 34px;
  padding-left: 5px;
}
.price {
  display: flex;
}
.wrapper {
  margin-bottom: 20px;
  position: absolute;
  top: 60%;
}

.main-wrapper {
  display: flex;
}
.selectedBrand {
  position: absolute;
  top: 40%;
}
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
.values {
  margin-left: 20px;
}
.filters {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70%;
}
.prices {
  margin-bottom: 10px;
}
</style>
