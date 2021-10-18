<template>
    <div class="d-flex flex-wrap justify-sm-center">
        <div class="di" v-if="getProductTransaction.TransationHeader ">
            <Header />
        </div>
        <h4 v-else class="display-2 red--text text--accent-3 text--disabled flexx">Access Denied</h4>
         
        
      
         <div class="con" v-if="getProductTransaction.TransationContent ">   <span v-for="(item,index) in items" :key="index" class="ma-4" >
            <Transaction :details="item" :bol="getall[index]" />
        </span></div>
        <h4 v-else class="display-2 indigo--text text--darken-4 text--disabled hei flexx">Access Denied</h4>
   
      
      
        <div class="ft" v-if="getProductTransaction.TransationFooter ">
            <Footer />
           

        </div>
         <h4 v-else class="display-2 teal--text text--darken-4 text--disabled flexx">Access Denied</h4>
        
        
       
        

    </div>
</template>

<script>
import {mapGetters } from "vuex";
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Transaction from '../components/Transaction.vue'
    export default {
  components: { Transaction, Footer, Header },
  data(){
      return{
          items:[
              {title: "Products",typ:"Goods",descriptions:"The details displayed often include size, color, price, shipping information, reviews, and other relevant information customers may want to know before making a purchase",subtitle:"vuex",long:"Product descriptions enhance the customer experience by making your site look professional and helping you sell your product."},
              {title: "Tech",typ:"Services",descriptions:"A product or service description is marketing copy that explains why your offering is special or unique and why customers should buy it",subtitle:"Applications",long:" Product descriptions can also help you stand out from competitors by telling customers what your product has that others don't!"},
              {title: "InBound",typ:"Inbound",descriptions:"Inbound sales begin when a lead comes from a potential customer reaching out to your organization to inquire about a product or service",subtitle:"Inbound Product Management ",long:" Inbound product management team is responsible for ensuring that the solution developed by the team meets the identified problem"},
              {title: "OutBound",typ:"Outbound",descriptions:"Outbound logistics processes are related to the movement of end products to the end user organization to inquire about a product or service",subtitle:"outbound Product Management ",long:" Outbound sales are the result of a prospecting effort to a potential customer who has not yet expressed interest in a product or service offered by the organization."}
          ],
          str:"hii",
         
          
          

          


          
          

      }
      
  },
   mounted(){
    console.log("from",this.getall);

  },
  computed:{
      ...mapGetters(['getProductTransaction',"getProductService"]),
      getGoods(){
          return this.getProductService.Goods;
      },
      getServices(){
          return this.getProductService.Services;
      },
      getInbound(){
          return this.getProductService.Inbound;
      },
      getOutbound(){
          return this.getProductService.Outbound;
      },
      getall(){
          return [this.getGoods,this.getServices,this.getInbound,this.getOutbound]

      }
    }
        
    }
</script>

<style lang="css" scoped>
.tss{
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
.di{
    width: 100%;
}
.flexy{
    position: absolute;
    right: 5%;
    top: 35%;
}
.con{
    display: contents;
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

</style>