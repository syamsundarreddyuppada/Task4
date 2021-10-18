<template>
  <div class="home">
   
    <span id="myhead" v-if="getProductPage.ProductHeader"><Header  /></span>
    <h4 v-else class="display-2 red--text text--accent-3 text--disabled flexx">Access Denied</h4>

    
   

    
 
     <div class="text-center" v-show="isLoading && getProductPage.ProductContent">
    <v-progress-circular
      :size="100"
      color="primary"
      indeterminate
    ></v-progress-circular>
    </div>
    
    
    <div class="flex  " id="mycontent" v-if="getProductPage.ProductContent">
      <Products v-for="(item,index) in details" :key="index" :id="index" :title="item.title"  :description="item.description" :image="item.image" :price="item.price" :rating="item.rating.rate" />
      
      </div> 
      <h4 v-else class="display-2 indigo--text text--darken-4 text--disabled hei flexx">Access Denied</h4>
  <div class="d-flex justify-end">
  
  </div>
      
 <div v-show="!isLoading"  v-if="getProductPage.ProductFooter">
   <Footer />
 </div>
 <h4 v-else class="display-2 teal--text text--darken-4 text--disabled flexx">Access Denied</h4>
  </div>
  
</template>

<script>

import Header from '../components/Header.vue';
import Products from '../components/Products.vue';
import {mapGetters } from "vuex";
import Footer from '../components/Footer.vue';


export default {
  name: "Home",

  components: {
  
    Header,
   
    Products,
    Footer,
  },
  
    data: () => ({
    details : [],
    isLoading:true,
     
  }),
   mounted(){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              this.isLoading = false;
              this.details = json
              
            })
  },
  created(){
    console.log("iam from creared",this.getStates,"iam from product",this.getProduct);

  },
  computed : {
    ...mapGetters(["getStates","getProduct","getProductPage"]),
  },
  methods : {
   
  }
  
};
</script>
<style>
.flex{
  display: flex;
    flex-wrap: wrap;
}
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
.home{
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}
</style>
