<template>
  <div class="product">
    <h2>{{product.name}}</h2>
    <img v-bind:src="product.image">
    <button @click="handlerWhislist"><img src="https://static.thenounproject.com/png/3386813-200.png" alt=""></button>

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
