<template>
  <div class="product">
    <h1>{{product.name}}</h1>
    <h2>{{product.price}} €!!!</h2><button>COMPRAR</button><br>
    <img v-bind:src="product.image">

    
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: "Product",
    data() {
      return {
        product : {}
      }
    },
    mounted() {

      this.getProduct()
    },
    methods: {
      async getProduct() {
        try{
          const products = await fetch(`http://localhost:3000/products/${this.$route.params.productId}`, { mode: 'cors'});
          this.product = await products.json();
        } catch(e){
          console.log(e)
        }
      }
  }
  };
</script>
