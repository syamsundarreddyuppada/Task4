import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
   product:{
    productPage:{
        ProductMainPage:true,
        ProductHeader:true,
        ProductContent:true,
        ProductFooter:true,
        
    },
    Account:{
      AccountMainPage:true,
        AccountHeader:true,
        AccountContent:true,
        AccountInputs:{
          Name:true,
          Email:true,
        phone:true,
          Age:true,
          DoUHave:true,
          Relation:true,
          Salary:true
          


        },
        AccountFooter:true,
        
    },
    Transation:{
      TransationMainPage:true,
        TransationHeader:true,
        TransationContent:true,
        TransationServices:{
          Goods:true,
          Services:true,
          Inbound:true,
          Outbound:true

        },

        TransationFooter:true,
        
    },
   }
  },
  mutations: {
    addmasterActions(state,data){
      state.items=data;
      console.log("this is add to item",state.items);

    },
    addPagesData(state,arr){
      console.log(arr);
      state.product.productPage.ProductMainPage=arr[0]
      state.product.productPage.ProductHeader=arr[1]
      state.product.productPage.ProductContent=arr[2]
      state.product.productPage.ProductFooter=arr[3]
      state.product.Account.AccountMainPage=arr[4]
      state.product.Account.AccountHeader=arr[5]
      state.product.Account.AccountContent=arr[6]
      state.product.Account.AccountInputs.Name=arr[7]
      state.product.Account.AccountInputs.Email=arr[8]
      state.product.Account.AccountInputs.phone=arr[9]
      state.product.Account.AccountInputs.Age=arr[10]
      state.product.Account.AccountInputs.DoUHave=arr[11]
      state.product.Account.AccountInputs.Relation=arr[12]
      state.product.Account.AccountInputs.Salary=arr[13]
      state.product.Account.AccountFooter=arr[14]
      
      
      state.product.Transation.TransationMainPage=arr[15]
      state.product.Transation.TransationHeader=arr[16]
      state.product.Transation.TransationContent=arr[17]
      state.product.Transation.TransationServices.Goods=arr[18]
      state.product.Transation.TransationServices.Services=arr[19]
      state.product.Transation.TransationServices.Inbound=arr[20]
      state.product.Transation.TransationServices.Outbound=arr[21]
      state.product.Transation.TransationFooter=arr[22]
      
      

      console.log(state.product);
    }
    
    
  },
  actions: {
    masterActions({commit},data){
      let arr = data.map(item => item.switches1);
      
  
      
      commit("addmasterActions",data);
      commit("addPagesData",arr);
      
    }
   
  },
 
  getters: {
    getStates : (state) => state.items,
    getProduct : (state) => state.product,
    getProductPage : (state) => state.product.productPage,
    getProductAccount : (state) => state.product.Account,
    getProductfields : (state) => state.product.Account.AccountInputs,
    getProductTransaction : (state) => state.product.Transation,
    getProductService : (state) => state.product.Transation.TransationServices
   
  },

  modules: {},
});
