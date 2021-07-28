<template>
  <div class="productList">
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
  // Pasa un poco después de que se carga el componente, así carga antes el componente aunque sin contenido
  mounted() {
    this.getProducts()
  },
  // Lo cogemos del store user ID está definido en el store
  computed: {
    ...mapGetters({
      userId: "userId"
    }),
    // Cada vez que agregemos productos, se va a ejecutar este filtro
    // que es el que usamos en la vista para listar los productos
    productsAvailable() {
      return this.products.filter(
        product => product.state == "available"
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
      const {products} = await fetch("")
      this.products = products
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
