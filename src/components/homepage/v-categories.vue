<template>
  <div class="v-categiries">
    <h1>Categories</h1>

    <div class="radio">
      <input
        v-on:click="check"
        type="radio"
        class="radio_input"
        id="radio_1"
        name="categories"
      />
      <label for="radio_1" class="radio_label">Cell phones</label>
    </div>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_2" name="categories" />
      <label for="radio_2" class="radio_label">Computer</label>
    </div>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_3" name="categories" />
      <label for="radio_3" class="radio_label">Health and Fitness</label>
    </div>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_4" name="categories" />
      <label for="radio_4" class="radio_label">Office</label>
    </div>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_5" name="categories" />
      <label for="radio_5" class="radio_label">TV</label>
    </div>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_6" name="categories" />
      <label for="radio_6" class="radio_label">Video Games</label>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-categories",
  components: {},
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
    methods: {
      check() {
        
      },
    },
  },
};
</script>
