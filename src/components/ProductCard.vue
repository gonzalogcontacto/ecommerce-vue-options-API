<template>
  <div class="product">
    <h1>{{product.name}}</h1>
    <img v-bind:src="product.image">
    <router-link :to="{ name: 'Product', params: {productId: product.id } }">more..</router-link>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  data() {
    return { 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    color: red;
  }
</style>
