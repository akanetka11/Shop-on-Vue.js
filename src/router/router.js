import Vue from "vue";
import Router from "vue-router";
import Homepage from "../components/homepage/v-homepage.vue";
import Cart from "../components/cart/v-cart.vue";
import productDetails from "../components/productDetails/v-product-details.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },

    {
      path: "/product/:id",
      name: "productDetails",
      component: productDetails,
    },
  ],
});
export default router;
