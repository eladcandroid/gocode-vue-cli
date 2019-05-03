<template>
  <div class="product">
    <el-button type="primary" @click="$emit('add-to-cart', id)">Add to cart</el-button>
    <div class="description">Item Description: {{ description }}</div>
    <div class="image">
      <img :src="require('../assets/' + image)" width="100" />
    </div>
    <router-link :to="'/product/' + id"><el-button type="info">Show Details</el-button></router-link>
  </div>
</template>
<script>
export default {
  props: ["description", "image", "id"]
};
</script>
<style scoped>
.product {
  height: 300px;
  border: 1px solid black;
  /* float: left;
  height: 200px;
  width: 300px;
  margin: 10px;
  padding: 20px; */
}
</style>
