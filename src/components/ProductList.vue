<template>
  <div class="productList">
     <ProductCard
        v-for="product in productsAvailable"
        :product="product"
        :key="product.id"
      />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import whislistMixon from '../mixins/whislist'
import productsMixin from '../mixins/products'

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
  mixins: [whislistMixon, productsMixin],
  components:{
    ProductCard
  },
  async mounted() {
    this.products = await this.getProducts()
    console.log(this.products)
  },
  computed: {
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
  methods: {}
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
