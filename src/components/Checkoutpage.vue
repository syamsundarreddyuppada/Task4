<template>
<v-card
    :loading="loading"
    class="mx-auto my-12"
    
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      width= "25%"
     
      :src="details.image"
    ></v-img>

    

    <v-container>
      <v-card-title>{{details.title}}</v-card-title>
      <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      <v-rating
  background-color="grey"
  color="warning"
  
  hover
  length="5"
  size="25"
  :value="details.rating"
></v-rating>
       

        <div class="grey--text ms-4">
         {{details.rating}}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ {{details.price}} 
      </div>

      <div>{{details.description}} </div>
      <v-btn
      class="px-12"
  color="primary "
  elevation="1"
  my-2
  outlined
  rounded
  text
  @click="del(id)"
  

>Remove</v-btn>
    </v-card-text>
    </v-container>
     </v-card>
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Checkoutpage",
  props: {
    details: Object,
    id : Number
  },
  methods: {
    ...mapActions(["del"]),
    
  },
};
</script>

<style lang="css" scoped>
.product1 {
  width: 100%;
  margin: 5px;
}

.main__card {
  display: flex;
  width: 100%;
  background: white;
  overflow: hidden;
  border-radius: 10px;
  height: 200px;
  margin: 7px;
}
.main__card img {
  width: 20%;
  object-fit: contain;
}
.main__card__right {
  padding: 0 1rem;
  position: relative;
}
.card_-price {
  position: absolute;
  bottom: 5%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.main__card__right button {
  background: white;
  color: #ff8b17;
  border-radius: 14px;
  border: 1px solid orange;
  width: 50%;
  padding: 5px;
  font-weight: 700;
  margin-right: 1.5em;
}
.main__card__right button:hover {
  background-color: #ff8b17;
  color: white;
}
</style>
