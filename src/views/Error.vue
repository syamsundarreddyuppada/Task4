<template>
    <div>
        
        <div class="display-2 text--disabled err ">
           
        
        
      
            <h4>Access Denied for this Page <v-icon x-large left>fa-frown-o</v-icon></h4>
            <h5 class="text--primary title my-3
            ">Click Here to Redirect to page <v-btn to="/" v-if="getProductPage.ProductMainPage" text class="blue--text text-decoration-underline ">  Home</v-btn>
            <v-btn to="/unauthorise" v-else text class="blue--text text-decoration-underline ">  Home</v-btn>
            <v-btn to="/account" v-if="getProductAccount.AccountMainPage" text class="blue--text text-decoration-underline ">Accounts </v-btn>
                     <v-btn to="/unauthorise" v-else text class="blue--text text-decoration-underline ">Accounts </v-btn>
            <v-btn to="/transactions" v-if="getProductTransaction.TransationMainPage" text class="blue--text text-decoration-underline ">transactions </v-btn>
               <v-btn to="/unauthorise" v-else text class="blue--text text-decoration-underline ">transactions </v-btn> </h5>
          
        </div>
          

    </div>
</template>

<script>
import { mapGetters } from "vuex";

    export default {
        name:"error",
         computed: {
    ...mapGetters(["getProductPage","getProductAccount","getProductTransaction"]),
   }
  
        
    }
</script>

<style lang="css" scoped>
.err{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    flex-direction: column;
}

</style>