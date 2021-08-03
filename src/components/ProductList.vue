<template>
  <div class="productList">
     
    <div v-for="product in productsAvailable" :key="product.id">
        <h2>{{product.name}}</h2>
        <img v-bind:src="product.image">
        <button @click="saveWhislisHandler(product)"><img src="https://static.thenounproject.com/png/3386813-200.png" class="whislist" alt=""></button>
    </div>


  </div>
</template>

<script>

import whislist from '../mixins/whislist'

export default {
  name: "ProductList",
  props: {
    itemsPage: {
      type: Number,
      default: 3,
    }
  },
  data(){ 
    return {
      products:[]
    }
  },
  // Pasa un poco después de que se carga el componente, así carga antes el componente aunque sin contenido
  mounted() {
    this.getProducts()
  },
  mixins:[whislist],
  computed: {
    // Cada vez que agregemos productos, se va a ejecutar este filtro
    // que es el que usamos en la vista para listar los productos
    productsAvailable() {
      return this.products.filter(
        product => product.price > 20
      )
    }
  },
  // Side effect cuando cambia la ruta
  watch: {
    $route() {
      this.getProducts()
    }
  },
  methods: {    
    async getProducts() {
      try{
        const products = await fetch("http://localhost:3000/products", { mode: 'cors'});
        this.products = await products.json();
      } catch(e){
        console.log(e)
      }
    },
    saveWhislisHandler(product) {
      this.saveWhislist(product).then((response) => {
        console.log(response)
        if (confirm('Are you sure you want to save this thing into the database?')) {
          // Save it!
          alert('Thing was saved to the database.');
        } else {
          // Do nothing!
          console.log('Thing was not saved to the database.');
        }
        //document.getElementsByClassName('whislist').addClass('saved');
      }).catch((error)=> {
        console.log(error); 
        alert('something went wrong')
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    color: red;
  }
  button{
    background: transparent;
    border: none;
    img {
      max-width: 40px;
    }
    img.saved{
          filter: invert(48%) sepia(13%) saturate(3507%) hue-rotate(303deg) brightness(95%) contrast(80%);
    }
  }
</style>
