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
  data() {
    return { 
      products: []
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
        product => product.price > 0
      )
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    color: red;
  }
</style>
