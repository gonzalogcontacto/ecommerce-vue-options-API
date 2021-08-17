<template>
  <div class="product">
<<<<<<< HEAD
    <h2>{{product.name}}</h2>
    <img v-bind:src="product.image">
    <button @click="addProductToWhislist"><img src="https://static.thenounproject.com/png/3386813-200.png" alt=""></button>

=======
    <h1>producto {{product.name}}</h1>
    <img v-bind:src="product.image">
    <button @click="handlerWhislist(product)">Agregar a whislist</button>
>>>>>>> integration-test-mocking-mixins
  </div>
</template>

<script>
import whislistMixin from '../mixins/whislist';

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
  },
  mixins: [whislistMixin],
  methods: {
    handlerWhislist(product) {
      if(confirm('¿Estas seguro?')){
        this.addProductToWhislist(product).then(() => {
          alert('Producto guardo en whislist')
        }).catch(() => alert('Something went wrong'))
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    color: black;
  }
</style>
