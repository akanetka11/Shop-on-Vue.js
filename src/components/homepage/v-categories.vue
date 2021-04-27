<template>
  <div class="v-categories">
    <vSelectCategory
      :categories="categories"
      @select="categorySelect"
      :selected="selected"
    ></vSelectCategory>
    <p class="selectedCategory">{{ selected }}</p>
  </div>
</template>
<script>
import vSelectCategory from "../v-selectCategories";
export default {
  name: "v-categories",
  components: {
    vSelectCategory,
  },
  props: {},
  data() {
    return {
      categories: [
        { name: "Cell phones", value: "" },
        { name: "Computer", value: "" },
        { name: "Health and Fitness", value: "" },
        { name: "Office", value: "" },
        { name: "TV", value: "" },
        { name: "Video Games", value: "" },
      ],
      selected: "Select",
    };
  },
  methods: {
    categorySelect(category) {
      this.selected = category.name;
    },
  },
};
</script>
<style>
.selectedCategory {
  margin-top: 10px;
}
</style>
