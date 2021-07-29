<template>
  <div class="productList">
    <h1>{{ msg }}</h1>
     <ProductCard
        v-for="product in productsAvailable"
        :product="product"
        :key="product.id"
      />

  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: "ProductList",
  props: {
    itemsPage: {
      type: Number,
      default: 3,
    }
  },
  data() {
    return { 
      products: []
    }
  },
  components:{
    ProductCard
  },
  // Pasa un poco después de que se carga el componente, así carga antes el componente aunque sin contenido
  mounted() {
    this.getProducts()
  },
  // Lo cogemos del store user ID está definido en el store
  computed: {
    /*
    ...mapGetters({
      userId: "userId"
    }),*/
    // Cada vez que agregemos productos, se va a ejecutar este filtro
    // que es el que usamos en la vista para listar los productos
    productsAvailable() {
      return this.products.filter(
        product => product.price > 0
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
