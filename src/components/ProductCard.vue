<template>
  <div class="product">
    <h2>{{product.name}}</h2>
    <img v-bind:src="product.image">
    <button @click="addProductToWhislist"><img src="https://static.thenounproject.com/png/3386813-200.png" alt=""></button>

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
