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
