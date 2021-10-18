<template>
    <div>
    
        <v-card
    class="mx-auto"
    
    tile
  >
   <div class="di">
            <Header />
        </div>
       
  
   <h1>MasterAccess</h1>
    
    <v-list rounded>
      <v-subheader>MasterControls</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content :class="item.margin " class="pa-0 py-0">
            <div class="d-flex justify-start align-center">
              <h2  >{{item.title}} </h2>
               <h3 >{{item.text}}</h3>
          
            <v-switch
      v-model="item.switches1"
      @click="parentAction(item)"
      :disabled="item.disable"
    ></v-switch>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-alert
  dense
  outlined
  text
  v-show="successAlert"
  type="success"
> Added succussfully</v-alert>
         <v-btn
      rounded
      color="primary"
      dark
      class="mx-5"
       @click="masterActions(items)"
    >
      Save
    </v-btn>
    
      </v-list-item-group>
    </v-list>
  </v-card>
       

    </div>
</template>

<script>
import {mapGetters} from "vuex"
import Header from './Header.vue';
    export default {
  components: { Header },
        name:"MasterControl",
        data: () => ({
      selectedItem: 1,
      items: [
        { title:"ProductPage",switches1:true},
        { text: 'ProductHeader',switches1:true,margin:"ml-12"},
        { text: 'ProductContent' ,switches1:true,margin:"ml-12",disable:false},
        { text: 'ProductFooter',switches1:true ,margin:"ml-12" },
        { title:"AccountPage",switches1:true},
        { text: 'AccountHeader',switches1:true,margin:"ml-12" },
        { text: 'AccountContent' ,switches1:true,margin:"ml-12"},
        { text: 'Name' ,switches1:true,margin:"ml-16 pl-16" },
          { text: 'Email' ,switches1:true,margin:"ml-16 pl-16"},
          { text: 'Phone' ,switches1:true,margin:"ml-16 pl-16"},
          { text: 'Age' ,switches1:true,margin:"ml-16 pl-16"},
          { text: 'Do u have Laptop' ,switches1:true,margin:"ml-16 pl-16"},
          { text: 'Relationship' ,switches1:true,margin:"ml-16 pl-16"},
          { text: 'Salary' ,switches1:true,margin:"ml-16 pl-16"},
           { text: 'AccountFooter' ,switches1:true,margin:"ml-12"},
         { title:"TransationPage",switches1:true},
        { text: 'TransationHeader',switches1:true,margin:"ml-12"},
        { text: 'TransationContent',switches1:true,margin:"ml-12" },
          { text: 'Goods' ,switches1:true,margin:"ml-16 pl-16"},
          { text: 'Services' ,switches1:true,margin:"ml-16 pl-16"},
          { text: 'Inbound' ,switches1:true,margin:"ml-16 pl-16"},
          { text: 'OutBound' ,switches1:true,margin:"ml-16 pl-16"},
        { text: 'TransationFooter',switches1:true },
       
      ],
      successAlert:false
      

     
    }),
     mounted(){
      this.items=this.getStates

    },
    
    methods : {
      masterActions(item){
        this.successAlert=true
        this.$store.dispatch("masterActions",item);
         setTimeout(() => {
           this.successAlert=false
         }, 1000);


      },
        
        parentAction(item){
          if (item.title ==="ProductPage" ) {
            if (item.switches1) {
              item.switches1=true
              
            } else {
              for (let i = 0; i < 4 ; i++) {
              this.items[i].switches1 = item.switches1
            }
            }
          }
          else if(item.text ==="ProductHeader"){
              if (!(this.items[0].switches1)) {
                 alert("Parent Home Should be ON")
               setTimeout(() => {
                 this.items[1].switches1=false
              }, 4);
             
            } 
           
          }
            else if(item.text ==="ProductFooter"){
              if (!(this.items[0].switches1)) {
                 alert("Parent Home Should be ON")
               setTimeout(() => {
                 this.items[3].switches1=false
              }, 4);
             
            } 
           //Account HF
          }
          else if(item.title ==="AccountPage"){
             if (item.switches1) {
              item.switches1=true
              
            }
            else{
            for (let i = 4; i < 15 ; i++) {
              this.items[i].switches1 = item.switches1
            }
          }
          }
            else if(item.text ==="AccountHeader"){
              if (!(this.items[4].switches1)) {
                 alert("Parent Account Should be ON")
               setTimeout(() => {
                 this.items[5].switches1=false
              }, 4);
             
            } 
           
          }
            else if(item.text ==="AccountFooter"){
              if (!(this.items[4].switches1)) {
                 alert("Parent Account Should be ON")
               setTimeout(() => {
                 this.items[14].switches1=false
              }, 4);
             
            } 
           //Transaction HF
          }
           else if(item.title ==="TransationPage"){
              if (item.switches1) {
              item.switches1=true
              
            }
            else{
            for (let i = 15; i < 23 ; i++) {
              this.items[i].switches1 = item.switches1
            }
          }
           }

             else if(item.text ==="TransationHeader"){
              if (!(this.items[15].switches1)) {
                 alert("Parent Account Should be ON")
               setTimeout(() => {
                 this.items[16].switches1=false
              }, 4);
             
            } 
           
          }
            else if(item.text ==="TransationFooter"){
              if (!(this.items[15].switches1)) {
                 alert("Parent Account Should be ON")
               setTimeout(() => {
                 this.items[22].switches1=false
              }, 4);
             
            } 
           
          }
          else if (item.text === "ProductContent") {
            
            if (!(this.items[0].switches1)) {
               setTimeout(() => {
                 this.items[2].switches1=false
              }, 4);
            
              alert("Parent Home Should be ON")
            } 
          }
          //Account Content

          else if (item.text === "AccountContent") {
            if (!(this.items[4].switches1)) {
              alert("Parent Account  Should be ON")
               setTimeout(() => {
                 this.items[6].switches1=false
              }, 4);
            }
            else if(this.items[4].switches1){
               if (item.switches1) {
              item.switches1=true
              
            }
            else{
              for (let i = 6; i < 14 ; i++) {
              this.items[i].switches1 = false
            }
            }
            }
          }
          //Account Inputs

           else if (item.text === "Name") {
            if (!(this.items[6].switches1)) {
              alert("Parent Account Content  Should be ON")
               setTimeout(() => {
                 this.items[7].switches1=false
              }, 4);
            } 
          }
          else if (item.text === "Email") {
            if (!(this.items[6].switches1)) {
              alert("Parent Account Content  Should be ON")
               setTimeout(() => {
                 this.items[8].switches1=false
              }, 4);
            } 
          }
          else if (item.text === "Phone") {
            if (!(this.items[6].switches1)) {
              alert("Parent Account Content  Should be ON")
               setTimeout(() => {
                 this.items[9].switches1=false
              }, 4);
            } 
          }
          else if (item.text === "Age") {
            if (!(this.items[6].switches1)) {
              alert("Parent Account Content  Should be ON")
               setTimeout(() => {
                 this.items[10].switches1=false
              }, 4);
            } 
          }
          else if (item.text === "Do u have Laptop") {
            if (!(this.items[6].switches1)) {
              alert("Parent Account Content  Should be ON")
               setTimeout(() => {
                 this.items[11].switches1=false
              }, 4);
            } 
          }
          else if (item.text === "Relationship") {
            if (!(this.items[6].switches1)) {
              alert("Parent Account Content  Should be ON")
               setTimeout(() => {
                 this.items[12].switches1=false
              }, 4);
            } 
          }
          else if (item.text === "Salary") {
            if (!(this.items[6].switches1)) {
              alert("Parent Account Content  Should be ON")
               setTimeout(() => {
                 this.items[13].switches1=false
              }, 4);
            } 
            
          }

          //Transaction Content
            else if (item.text === "TransationContent") {
            if (!(this.items[15].switches1)) {
              alert("Parent Transation  Should be ON")
               setTimeout(() => {
                 this.items[17].switches1=false
              }, 4);
            }
            else if(this.items[15].switches1){
               if (item.switches1) {
              item.switches1=true
              
            }
            else{
              for (let i = 17; i < 22 ; i++) {
              this.items[i].switches1 = false
            }
            }
            }
          }

          //Transaction Services

          else if (item.text === "Goods") {
            if (!(this.items[17].switches1)) {
              alert("Parent TransationContent Content  Should be ON")
               setTimeout(() => {
                 this.items[18].switches1=false
              }, 4);
            } 
          }
          else if (item.text === "Services") {
            if (!(this.items[17].switches1)) {
              alert("Parent TransationContent Content  Should be ON")
               setTimeout(() => {
                 this.items[19].switches1=false
              }, 4);
            } 
          }
          else if (item.text === "Inbound") {
            if (!(this.items[17].switches1)) {
              alert("Parent TransationContent Content  Should be ON")
               setTimeout(() => {
                 this.items[20].switches1=false
              }, 4);
            } 
          }
          else if (item.text === "OutBound") {
            if (!(this.items[17].switches1)) {
              alert("Parent TransationContent Content  Should be ON")
               setTimeout(() => {
                 this.items[21].switches1=false
              }, 4);
            } 
          }
          
          
         
        }
    },
    computed : {
        ...mapGetters(["getStates"]),
        getitems(){
            return this.items.Map(item => item.switches1);
        }
    }

    }
</script>

<style lang="css" scoped>
.di{
    width: 100% !important;
}

</style>