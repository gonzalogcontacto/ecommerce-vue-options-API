<template>
  <div class="home">
<<<<<<< HEAD
=======
    
>>>>>>> integration-test-mocking-mixins
    <ProductList msg="Listado de productos!" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ProductList from "@/components/ProductList.vue";

  export default {
    name: "Home",
    components: {
      ProductList,
    },
  };
</script>
