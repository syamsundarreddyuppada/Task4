<template>
 <div class="content">
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
       
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2  ">
            <img class="mask" :src="slide" alt="" srcset="">
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

             
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
 
 </div>
</template>
<script>
export default {
  name: "Content",
  data () {
      return {
  
        slides: [
          "https://m.media-amazon.com/images/I/71fXvL0Zt5L._SX3000_.jpg",
          "https://m.media-amazon.com/images/I/71rRp7KrlcL._SX3000_.jpg",
          "https://m.media-amazon.com/images/I/71pRQqR0OML._SX3000_.jpg"
         
        ],
         show: false,
          cards: [
       
        { title: 'Up to 65% off | TVs & appliances', src: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Jupiter21/LATV/R01_CC_379X304._SY304_CB639977399_.jpg', flex: 6 },
        { title: 'Up to 70% off | Books, toys, grooming & more', src: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/092020/jupiter/gw/DesktopGateway_QuadCard_372X232_All-GLs_2_1x._SY116_CB639940894_.jpg', flex: 6 },
      ],
      }
}
}

</script>

<style lang="css" scoped>

.mask {
  width: 100%;
  z-index: -1;
  
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
.main__content1 {
  display: flex;
  flex-direction: column;
  background-color: #f7f2ee;
}
.main__img {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}
.head {
  display: flex;
  justify-content: space-between;
}
.head h2 {
  margin: 15px;
}
.options {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  padding: 1rem;
  background: #fafafa;
  border-radius: 5px;
}
.options img {
  background-color: white;
  border-radius: 8px;
}
</style>
