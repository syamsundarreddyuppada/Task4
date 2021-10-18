<template>
    <div class="accHome">
        <div id="myhead" v-if="getProductAccount.AccountHeader "><Header /> </div>
        <h4 v-else class="display-2 red--text text--accent-3 text--disabled flexx">Access Denied</h4>
        
      <div id="mycontent" v-if="getProductAccount.AccountContent ">  <Account /></div>
       <h4 v-else class="display-2 indigo--text text--darken-4 text--disabled hei flexx">Access Denied</h4>
    
        <div v-if="getProductAccount.AccountFooter">
           <Footer />
        </div>
        <h4 v-else class="display-2 teal--text text--darken-4 text--disabled flexx">Access Denied</h4>
        

    </div>
</template>

<script>
import Account from '../components/Account.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import {mapGetters } from "vuex";
    export default {
  components: { Account, Header, Footer },
  data(){
      return{
         
          
          

      }
  },

  methods:{
     
      
    },
    computed:
      mapGetters(['getProduct',"getProductAccount"])
    
        
    }
    
</script>

<style lang="css" scoped>
.hei{
    height: 67vh !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.flexx{
   width: 100%;
    text-align: center;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;


}
.accHome{
  display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
}

</style>