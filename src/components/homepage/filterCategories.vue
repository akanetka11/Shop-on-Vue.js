<template>
  <div class="filterCategories">
    <h1>Categories</h1>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_1" name="categories" />
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
    <div class="wrapper">
      <h1>Price</h1>
    </div>
    <div class="price">
      <input class="minPrice" placeholder="0" />
      <input class="maxPrice" placeholder="0" />
    </div>
    <div class="wrapper">
      <h1>Brands</h1>
    </div>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_7" name="brands" />
      <label for="radio_7" class="radio_label">Insignia™</label>
    </div>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_8" name="brands" />
      <label for="radio_8" class="radio_label">Samsung</label>
    </div>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_9" name="brands" />
      <label for="radio_9" class="radio_label">HP</label>
    </div>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_10" name="brands" />
      <label for="radio_10" class="radio_label">Apple</label>
    </div>
    <div class="radio">
      <input type="radio" class="radio_input" id="radio_11" name="brands" />
      <label for="radio_11" class="radio_label">Sony</label>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.filterCategories {
  box-sizing: border-box;
  width: 215px;
  background: #ffffff;
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 5px;
  box-shadow: 0px 0px 15px rgba(34, 41, 47, 0.05);
  border-radius: 8px;
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
}

.main-wrapper {
  display: flex;
}

.radio_input {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}
.radio {
  position: relative;
  margin-bottom: 10px;
}

.radio_input {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}

.radio_label {
  padding-left: 25px;
  font-size: 1rem;
  color: #444;
  cursor: pointer;
}

.radio_label:before {
  content: "";
  display: block;
  width: 16px;
  height: 16px;

  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 50%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  transition: border 0.1s linear;
}

.radio_label:after {
  content: "";
  display: block;
  width: 16px;
  height: 16px;

  background: #7367f0;
  border: 1px solid #7367f0;
  border-radius: 50%;
  opacity: 0;

  position: absolute;
  top: 0.6px;
  left: 0.6px;
  z-index: 1;
  box-shadow: 1px 2px 4px rgba(115, 103, 240, 0.4);

  transition: opacity 0.1s linear;
}
.radio_input:checked + .radio_label:before {
  border-color: #ccc;
}

.radio_input:checked + .radio_label:after {
  border-color: #7367f0;
  opacity: 1;
}
</style>
