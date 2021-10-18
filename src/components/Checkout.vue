<template>
  <div class="checkout">
    <div class="checkout__left">
      <img
        src="https://m.media-amazon.com/images/I/71fXvL0Zt5L._SX3000_.jpg"
        alt=""
      />
       <v-row>
         <v-btn
         class="my-5"
 
  color="primary"
 

  
  
  outlined
  @click="all"
>Remove all</v-btn>
<v-spacer></v-spacer>
<h2 class="display-2 mx-5">{{getName}} </h2>
       </v-row>
      
      <span v-show="getmount.length >= 1">
        <span v-for="(item, index) in getmount" :key="index"
          ><Checkoutpage :details="item" :id="index" /></span
      ></span>
    </div>

    <div class="checkout__right">
      <div class="subtotal">
        <h2>subtotal</h2>
        <p v-if="getmount.length >= 1">
          items {{ getmount.length }} : <strong>$ {{ cal.toFixed(2) }}</strong>
        </p>
        <p v-else>items 0 : 0</p>
        <v-btn
 
  color="primary"
 

  
  
  rounded
  @click="calculate"
>Checkout</v-btn>

        
      </div>
    </div>
  </div>
</template>

<script>
import Checkoutpage from "../components/Checkoutpage.vue";
import { mapGetters } from "vuex";


export default {
  components: { Checkoutpage },

  name: "Checkout",

  data() {
    return {};
  },
  methods: {
    calculate() {
      this.arr.push(this.details);
      console.log(this.arr);
    },
    all(event) {
      event.preventDefault();
      localStorage.clear();
    },
  },
  computed: {
    ...mapGetters(["getmount","getName"]),
    cal(){
      return this.getmount.reduce((amount, item) => item.price + amount, 0);
    }

  }
};
</script>

<style lang="css" scoped>
.checkout {
  display: flex;
}
.checkout__left {
  width: 65%;
}
.checkout__left img {
  width: 100%;
  height: 250px;
  object-fit: fill;
}
.checkout__right {
      width: 35%;
    height: 800px;
}
.subtotal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40%;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
}

.subtotal__gift {
  display: flex;
  align-items: center;
}

.subtotal__gift > input {
  margin-right: 5px;
}

.subtotal > button {
  background: #005aff;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #005aff;
  color: #111;
}
.buttoni {
  background: #005aff;
  color: white;
  border-radius: 14px;
  border: 1px solid #005aff;
  width: 39%;
  padding: 10px;
  font-weight: 700;
  margin-right: 1.5em;
  float: right;
  margin-bottom: -45px;
  margin-bottom: 10px;
}
</style>
