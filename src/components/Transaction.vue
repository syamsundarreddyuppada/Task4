<template>
  <v-card
    class="mx-auto"
    width="450"
   
  >
  
    <v-card-text v-if="bol">
      
      <div>{{details.typ}}</div>
      <p class="text-h4 text--primary">
        {{details.goodst}}
       {{details.title}}
      </p>
      
      <p>{{details.subtitle}}</p>
      <div class="text--primary">
      {{details.descriptions}}
      </div>
    </v-card-text>
   <div v-else class="display-2 line text--disabled" >Access Denied <v-icon x-large left>fa-frown-o</v-icon></div>
     
    

   
  </v-card>
</template>

<script>
import {mapGetters } from "vuex";

    export default {
        name:"Transaction",
        props:{
            details:Array,
            bol:Boolean
     
         
        },
       
       data: () => ({
      reveal: false,
      sw:this.details.goodst
     
      
    }),
    mounted(){
        console.log("this is from trasn",this.bol);
    },
    computed:{
      ...mapGetters(['getProductTransaction',"getProductService"]),
      getGood(){
        return this.getProductService
      }
     
    }
    
        
    }
</script>

<style lang="css" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.line{
  line-height: 220px;
  max-width: 450px !important;
  text-align: center;
}

</style>