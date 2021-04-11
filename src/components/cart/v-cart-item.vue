<template>
  <div class="v-cart-item">
    <div class="product__cart__info">
      <div class="product__cart__info__first">
        <img :src="cart_item_data.image" />
      </div>
      <div class="product__cart__info__second">
        <p class="title">{{ cart_item_data.title }}</p>
        <p class="company">
          by <span class="company-name">{{ cart_item_data.company }}</span>
        </p>
        <div class="quantity">
          Qty:
          <div class="quantity__button">
            <span class="quantity__btn" @click="decrementItem">
              -
            </span>
            {{ cart_item_data.quantity }}
            <span class="quantity__btn" @click="incrementItem">
              +
            </span>
          </div>
        </div>
      </div>
      <div class="product__cart__info__third">
        <p class="price">${{ cart_item_data.price }}</p>
        <button type="button" id="remove" @click="deleteFromCart">
          <img src="../img/icons8-multiply-48.png" />
          <h2>
            Remove
          </h2>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },

  computed: {},
};
</script>
<style>
v-cart-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 31px;
}
.product__cart__info {
  width: 870px;
  height: 190px;
  border: none;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.product__cart__info__second {
  width: 516px;
  height: 190px;
  border-right: 1px solid #e5e5e5;
  box-sizing: border-box;
  padding-top: 25px;
}
.product__cart__info__second .title {
  color: #636363;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
}
.product__cart__info__second .company {
  padding-bottom: 20px;
}
.product__cart__info__second .quantity {
  display: flex;
}
.product__cart__info__second .quantity__button {
  width: 100px;
  height: 30px;
  border: 1px solid #d8d6de;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.product__cart__info__second .quantity__button span {
  font-size: 18px;
}

.product__cart__info__second .company-name {
  color: #7367f0;
  font-weight: bold;
}
.product__cart__info__third {
  box-sizing: border-box;
  padding: 20px;
  padding-top: 0;
}
.product__cart__info__third #remove {
  margin-bottom: 10px;
}
.product__cart__info__third .price {
  color: #7367f0;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
}
.product__info p {
  color: #62606e;
  font-size: 16px;
  text-align: left;
  padding-left: 15px;
  padding-top: 6px;
}
.product__cart__info img {
  width: 212px;
  height: 151px;
}
</style>
