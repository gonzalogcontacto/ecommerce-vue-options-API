/**
 * Mixin es un componente que vamos a integrar en múltiples componentes que hagan uso de él.
 * Tiene ciclos de vida como los componentes
 */

 //import { mapGetters } from "vuex";
 import { api } from "../services/api";
 
 export default {
   data() {
     return {
       event: "view",
     };
   },
   mounted() {
     this.trackEvent(this.event);
   },
   computed: {
   //  ...mapGetters(["userId"]),
   },
   methods: {
     trackEvent(ev, payload) {
       console.log(`track ${ev} event by user`);
 
       api.trackEvent({
       //  user: this.userId,
         event: ev,
         payload,
       });
     },
   },
 };