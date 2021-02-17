<template>
  <button type="button" id="remove">
    <img src="../img/icons8-multiply-48.png" />
    <h2>
      Remove
    </h2>
  </button>
</template>
<script>
export default {
  name: "RemoveProduct",
};
</script>
<style>
#remove {
  background: #e3e3e3;
  width: 215px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
#remove h2 {
  margin: 0;
  color: #2a2e30;
  font-size: 16px;
  padding-left: 6px;
}
#remove img {
  width: 17px;
  height: 13px;
  padding: 0;
}
</style>
