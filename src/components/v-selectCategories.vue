<template>
  <div class="select-categories">
    <p
      class="title-category"
      @click="areCategoriesVisible = !areCategoriesVisible"
    >
      {{ selected }}
    </p>
    <div class="categories" v-if="areCategoriesVisible">
      <p
        v-for="category in categories"
        :key="category.value"
        @click="selectCategory(category)"
      >
        {{ category.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areCategoriesVisible: false,
    };
  },
  props: {
    categories: {
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
    selectCategory(category) {
      this.$emit("select", category);
      this.areCategoriesVisible = false;
    },
    hideSelect() {
      this.areCategoriesVisible = false;
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
.categories {
  border: 1px solid #5d50f1cc;
  padding: 0;
  cursor: pointer;
}
.categories p:hover {
  background: #938af342;
}
.title-category {
  margin-top: 30px;
  border: 1px solid #5d50f1cc;
}
.select-categories {
  position: absolute;
  top: 15%;
  width: 10%;
}
</style>
