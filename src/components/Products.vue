<template>
<v-card
    :loading="loading"
    class="mx-auto my-12 d-flex flex-column"
    max-width="374"

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
      :src="image"
    ></v-img>

    <v-card-title>{{title}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
         {{rating}}
        </div>
      </v-row>

      <div class="my-4 text-
      ubtitle-1">
        $ <strong>{{price}} </strong>
      </div>

      <div>{{description}} </div>
     
    </v-card-text>
     <v-btn
  color="primary "
  elevation="1"
  my-2
  outlined
  rounded
  text
  @click.prevent="addCart({id:id,title:title,description:description,price:price,image:image,rating:rating})"
  

>AddToCart</v-btn>
     </v-card>
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Products",
  props: {
    title: String,
    image: String,
    description: String,
    price: Number,
    id: Number,
    rating : Number
  },
  data() {
    return {
      isStock: 10,
    };
  },
  methods: {
    ...mapActions(["addCart"]),
  },
  computed: {

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
  width: 35%;
  object-fit: contain;
}
.main__card__right {
  padding: 0 1rem;
  position: relative;
}
.main__card__right h2 {
  font-size: 1rem;
}
code {
  height: fit-content;
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
  color: #003f69;
  border-radius: 14px;
  border: 1px solid #005aff;
  width: 50%;
  padding: 5px;
  font-weight: 700;
  margin-right: 1.5em;
}
.main__card__right button:hover {
  background-color: #005aff;
  color: white;
}
</style>
