<template>
  <div class="main__wrapper__catalog">
    <div class="v-catalog-list">
      <vCatalogItem
        v-for="product in PRODUCTS"
        class="main__wrapper__catalog__product"
        :key="product.id"
        :product_data="product"
        @addProductToCart="addProductToCart"
      ></vCatalogItem>
    </div>
  </div>
</template>
<script>
import vCatalogItem from "../components/homepage/v-catalog-item";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "products",
  components: {
    vCatalogItem,
  },
  data() {
    return {
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "SEARCH"]),
  },
  filteredProducts() {
    if (this.sortedProducts.length) {
      return this.sortedProducts;
    } else {
      return this.PRODUCTS;
    }
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addProductToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories() {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function(item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    this.sortByCategories();
  },
  watch: {},
};
</script>
<style>
.v-catalog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 85%;
}
.main__wrapper__products h1 {
  margin-left: 0;
  font-size: 24px;
  margin-bottom: 10px;
}

.main__wrapper__products {
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main__wrapper__catalog__product {
  background: #fff;
  width: 160px;
  box-shadow: 0px 0px 15px rgba(34, 41, 47, 0.05);
  border-radius: 8px;
  list-style: none;
}
.main__wrapper__catalog {
  padding-top: 20px;
}
</style>
