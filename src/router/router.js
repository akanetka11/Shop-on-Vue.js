import Vue from "vue";
import Router from "vue-router";
import Homepage from "../components/homepage/v-homepage.vue";
import Wishlist from "../components/wishlist/v-wishlist.vue";
import Checkout from "../components/checkout/v-checkout.vue";
// import ProductDetails from "../components/v-product-details.vue";

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
      path: "/wishlist",
      name: "wishlist",
      component: Wishlist,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    // {
    //   path: "/productDetails",
    //   name: "productDetails",
    //   component: ProductDetails,
    // },
  ],
});
export default router;
