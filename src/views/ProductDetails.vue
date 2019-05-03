<template>
  <div>
    <div v-if="product">{{ product.longDescription }}</div>
    <div v-else>The product is not found</div>
  </div>
</template>

<script>

export default {
  props: ["id"],
  data() {
    return { products: [] };
  },
  // mounted() {
  //     this.product = this.products.find(product=>
  //     product.id === +this.id)
  // },
  computed: {
    product() {
      if (this.products.length === 0) {
        return {
          id: null,
          description: "",
          longDescription: ""
        };
      }
      const res = this.products.find(product => product.id === +this.id);
      if (!res) {
        // go to 404
        return;
      }
      return this.products.find(product => product.id === +this.id);
    }
  },
  mounted() {
    this.$http.get('http://localhost:3000/').then((res)=>{
      this.products = res.data;
    })
  }  
};
</script>
