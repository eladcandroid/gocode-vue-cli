<template>
  <div>
    <img src="../assets/cart.png" width="40" />
    <span>{{ count }}</span>
    <ul>
      <li v-for="cartProduct in cartProducts" :key="cartProduct.id">{{ cartProduct.description }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["count", "cartProducts"]
};
</script>
