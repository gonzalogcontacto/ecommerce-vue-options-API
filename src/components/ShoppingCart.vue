<template>
  <div class="shoppingCart">
    <h1>{{ msg }}</h1>
    <div v-for="product in products" :key="product.id">
       {{product.name}} 
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    msg: String,
  },
  data() {
    return { 
      products: [ 
        { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
        { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" }
      ]
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
