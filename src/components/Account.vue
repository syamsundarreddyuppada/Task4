<template>
    <div class="flex1">
        <h1>Account Details</h1>


     <div class="d-flex">
          <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
      v-show="getProductfields.Name"
    ></v-text-field>
   
    <v-spacer></v-spacer>
     
     </div>

      <div class="d-flex">

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      v-show="getProductfields.Email"
    ></v-text-field>
    
      <v-spacer></v-spacer>
     
      </div>
     <div class="d-flex">
    <v-text-field
          v-model="phoneNumber"
          :counter="7"
          :error-messages="errors"
          label="Phone Number"
          required
          v-show="getProductfields.phone"
        ></v-text-field>
        
          <v-spacer></v-spacer>
       
     </div>
      <div class="d-flex">
         <v-select
          v-model="select"
          :items="items"
          :error-messages="errors"
          label="Age"
          data-vv-name="select"
          required
          v-show="getProductfields.Age"
        ></v-select>
        
          <v-spacer></v-spacer>
        
      </div>

       <div class="d-flex">
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Do u Have Laptop"
          type="checkbox"
          required
          v-show="getProductfields.DoUHave"
        ></v-checkbox>
        
          <v-spacer></v-spacer>
         
       </div>

        <div class="d-flex">
         <v-container
    class="px-0"
    fluid
    v-show="getProductfields.Relation"
  >
    <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="n in 3"
        :key="n"
        :label="`Company ${n}`"
        :value="n"
      ></v-radio>
    </v-radio-group>
  </v-container>
  
    <v-spacer></v-spacer>
 
        </div>
         <div class="d-flex">
 <v-content>
      <v-container  v-show="getProductfields.Salary">
       <v-slider v-model="sliderValue"
                    id="sliderId"
                    v-on:input="sliderInput"
                    :max="50000"
                    :min="10000"
                    step="10000"
                     label="Salary"
                    thumb-label large
                    ticks
                   class="red--text"
                  ></v-slider>
      </v-container>
      
        <v-spacer></v-spacer>
    </v-content>
    
         </div>

    </div>
</template>

<script>
import {mapGetters } from "vuex";
    export default {
        name:"account",
        data: () => ({
      name: '',
      phoneNumber: '',
      email: '',
      select: null,
      items: [
        '<18',
        '18 and 21 ',
        '21 and 30',
        '30 and 40',
      ],
      checkbox: null,
      radioGroup: 1,
      
     
    }),
    mounted(){
      console.log("this acc",this.getProductfields.Name);

    },
    computed:{
      ...mapGetters(['getProductTransaction',"getProductService","getProductfields"])
    }
        
    }
</script>

<style lang="css" scoped>
.flex1{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 65%;
    
}

</style>