<template>
  <div>
    <v-app-bar
      color="light-grey accent-4"
      dense
      light
      
      
    >
      

      

     
   
   <span class="hidden-sm-and-up">
     
       
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        
      </span>

    <v-toolbar-items class="hidden-xs-only">
      <v-btn to="/" v-if="getProductPage.ProductMainPage" text>
        <v-icon small left>fa-home</v-icon>
        Home
      </v-btn>
      <v-btn to="/unauthorise" v-else text>
        <v-icon small left>fa-home</v-icon>
        Home
      </v-btn>
       <v-btn to="/account" v-if="getProductAccount.AccountMainPage" text>
        <v-icon small left>fa-address-book-o</v-icon>
        Accounts
      </v-btn>
        <v-btn to="/unauthorise"  v-else text>
        <v-icon small left>fa-address-book-o</v-icon>
        Accounts
      </v-btn>
       <v-btn to="/transactions"  v-if="getProductTransaction.TransationMainPage" text>
        <v-icon small left>fa-credit-card</v-icon>
        Transations
      </v-btn>
      <v-btn to="/unauthorise" v-else text>
        <v-icon small left>fa-credit-card</v-icon>
        Transations
      </v-btn>
      
      
      

      
      
     
    
    </v-toolbar-items>
     <v-spacer></v-spacer>
    <v-btn to="/control" text>
        <v-icon small left>fa-user</v-icon>
        MasterAccess
      </v-btn>
      
   
    
      
    </v-app-bar>
     
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
 
  data(){
    return{
      dialog : false,
      email:"",
    name: "",
     switch1: true,
   
   
    }
  },
  beforeCreate() {
    console.log("before header");
  },
  created() {
    console.log("created header");
  },
  beforeMount() {
    console.log("before mount header");
  },
   mounted(){
    console.log(this.$store.getters.gettotal);
  },
  methods : {
    savedata(){
      this.$store.dispatch("addName",{name:this.name,email:this.email})
      this.dialog = false
    },
    
  },
   computed: {
    ...mapGetters(["getName","getEmail","getProductPage","getProductAccount","getProductTransaction"]),
   }

};
</script>

<style lang="css" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  height: 70px;
}
.container > img {
  width: 64px;
  height: 61px;
  object-fit: contain;
  cursor: pointer;

  padding: 1rem;
}
.con__right {
  display: flex;
  margin-right: 35px;
  align-items: center;
}
.con__right > img {
  width: 23px;
  height: 23px;
  object-fit: contain;
  cursor: pointer;
  margin: 0 10px;
}
.con__right > h3 {
  margin: 0 10px;
  cursor: pointer;
}
.header a {
  text-decoration: none;
  color: rgb(85, 85, 85);
}
</style>
