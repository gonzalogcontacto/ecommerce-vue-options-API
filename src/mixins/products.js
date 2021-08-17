import axios from "axios";

export default {
    mounted() {
        console.log('Mixin Injected')
    },
    methods: {
        async getProducts() {
            try{
              const products = await axios.get("http://localhost:3000/products");
              return products.data;
            } catch(e){
              console.log(e)
            }
          },
     }
}