<template>
  <div class="v-homepage">
    <div id="menu" class="menu">
      <toHomepage
        v-bind:style="{
          background: activeBackgroundColor,
          borderRadius: activeBorderRadiusOfHomepage,
        }"
      ></toHomepage>

      <toCart> </toCart>
    </div>
    <div id="main" class="main">
      <h1>Shop</h1>
      <div class="main__wrapper">
        <div>
          <h2>Filters</h2>
          <filterCategories></filterCategories>
        </div>
        <div class="main__wrapper__products">
          <div>
            <h1>results found</h1>
            <div class="searchProduct">
              <input
                class="searchField"
                type="text"
                placeholder="Search Product"
                v-model="search"
              />
              <button
                type="button"
                class="searchButton"
                @click="searchProduct(search)"
              >
                <img src="../img/icons8-поиск-50.png" />
              </button>
            </div>
            <products></products>

            <div class="toNextPage">
              <button type="button" class="back"></button>
              <div class="nextPage">
                <button
                  type="button"
                  v-bind:style="{
                    color: activeColor,
                    background: activeBackground,
                    borderRadius: activeBorderRadius,
                    border: activeBorder,
                  }"
                  class="toPage"
                  @click="switchView('firstProducts')"
                >
                  1
                </button>
                <button
                  type="button"
                  class="toPage"
                  @click="switchView('secondProducts')"
                >
                  2
                </button>
                <button
                  type="button"
                  class="toPage"
                  @click="switchView('thirdProducts')"
                >
                  3
                </button>
              </div>
              <button
                type="button"
                @click="$router.push('/wishlist')"
                class="next"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import toHomepage from "../menu/toHomepage";
import toCart from "../menu/toCart";
import filterCategories from "../homepage/filterCategories";
import products from "../products";
import { mapActions, mapGetters } from "vuex";
// import toFix from "../../filters/toFix";
// import formattedPrice from "../../filters/price-format";

export default {
  name: "v-homepage",
  components: {
    toHomepage,
    toCart,
    filterCategories,
    products,
  },
  props: {},
  data: function() {
    return {
      categories: [
        { type: "Cell phones", value: "cp" },
        { type: "Computer", value: "c" },
        { type: "Health and Fitness", value: "haf" },
        { type: "Office", value: "o" },
        { type: "TV", value: "tv" },
        { type: "Video Games", value: "vg" },
      ],
      url: "http://localhost:8081/public/static/data.json",
      activeBackground: "#7367f0",
      activeColor: "#fff",
      activeBorderRadius: "25px",
      activeBorder: "1px solid #7367f0",
      activeBackgroundColor: "#f5f5f5",
      activeBorderRadiusOfHomepage: "10px",
      searchValue: "",
      currentView: "firstProducts",
      isActive: true,
      search: "",
    };
  },
  computed: {
    ...mapGetters(["SEARCH"]),
  },
  methods: {
    ...mapActions(["GET_SEARCH"]),
    searchProduct(value) {
      this.GET_SEARCH(value);
    },
  },

  //вывод каталога товаров, поиск товара, добавление в корзину, добавление в wishlist
};
</script>
<style>
.v-homepage {
  display: flex;
}
.menu {
  width: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
#menu {
  padding-top: 25px;
}
.wishCount {
  background: #e85659;
  border-radius: 10px;
}

.main {
  background: #f5f5f5;
  padding-top: 15px;
  padding-left: 32px;
  padding-bottom: 25px;
  box-sizing: border-box;
  position: relative;
}
#main {
  width: 100vw;
  height: 100vh;
}
.main h1 {
  margin-top: 0px;
  color: #636363;
}
.main h2 {
  font-size: 24px;
  color: #62606e;
  margin-bottom: 10px;
  margin-top: 0;
}
.main__wrapper {
  padding-top: 10px;
  display: flex;
}
.searchField {
  border: none;
  width: 958px;
  height: 44px;
}
.searchButton {
  border: none;

  background: #fff;
}
.searchButton img {
  width: 25px;
  height: 25px;
}
.searchProduct {
  display: flex;
  width: 958px;
  height: 44px;
  background-image: url("../img/icons8-поиск-50.png");
  background-repeat: no-repeat;
  background-position-x: 97%;
  background-position-y: 50%;
  background-size: 25px;
  box-shadow: 0px 0px 15px rgba(34, 41, 47, 0.05);
  border-radius: 8px;
  border: none;
  padding: 10px 13px;
  font-size: 16px;
  background: #fff;
  color: #62606e;
}
.searchProduct :active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}

.toNextPage {
  display: flex;
  position: absolute;
  bottom: 3%;
  left: 45%;
}
.nextPage {
  width: 100px;
  height: 30px;
  border-radius: 15px;
  background: #f3f2f7;
  box-shadow: 0px 4px 25px rgba(34, 41, 47, 0.25);
}
.nextPage .toPage,
.back,
.next {
  border: none;
  cursor: pointer;
  border-radius: 25px;
  border: 1px solid #f3f2f7;
  background: #f3f2f7;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  color: #636363;
}
.back {
  margin-right: 5px;
  background: url("../img/icons8-назад-50.png");
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: 20px;
}
.next {
  margin-left: 5px;
  background: url("../img/icons8-больше-чем-50 (1).png");
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: 25px;
}
</style>
