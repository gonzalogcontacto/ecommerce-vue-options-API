<<<<<<< HEAD
/**
 * Mixin es un componente que vamos a integrar en múltiples componentes que hagan uso de él.
 * Tiene ciclos de vida como los componentes
 */

 export default {
  mounted() {
    console.log('mixin inyected')
   },
   methods: {
     async saveWhislist(payload) {
       console.log('EE')

        return await fetch("http://localhost:3000/whislist", {
            method:"POST",
            body: JSON.stringify(payload)
          })          
      }
     
   },
 };
=======
export default {
    mounted() {
        console.log('Mixin Injected')
    },
    methods: {
        async addProductToWhislist(payload){
            return await fetch('http://localhost:3000/whislist', {
                method: 'POST',
                body: JSON.stringify(payload)
            })
        }
     }
}
>>>>>>> integration-test-mocking-mixins
