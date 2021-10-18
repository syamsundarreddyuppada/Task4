<template>
  <div class="offer">
    <div class="main__content2">
      <h2 class="main__h2">Offers</h2>
      <div class="rows1">
        <img
          src="https://burgerking-image.s3.amazonaws.com/16176883571x1119x540jpg"
          alt=""
        /><img
          src="https://burgerking-image.s3.amazonaws.com/16306616351x1119x540jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
};
</script>

<style lang="css" scoped>
.rows1 img {
  width: 35%;

  object-fit: contain;
}
.rows1 {
  display: flex;
  justify-content: space-evenly;
}
.main__h2 {
  padding: 1rem;
  font-size: 2rem;
}
</style>
