<template>
    <div class="background">
        <div>
            <h1 class="header"> Checkout page </h1>
            <h2> Every movie is $5.99 </h2>
         </div>

         <div>
             <b-card
                title=:id="movie.title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>

         </div>

    </div>

    </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        movies: {
          title: '',
          stock: '',
          price: '$5.99'
        },
      }
    },
    methods: {},

    mounted: function(){
        console.log("Mounted worked properly")
        axios.get('http://localhost:3000/moviecatalog/shoppingcart')
            .then(respoonse => {
                console.log(respoonse.data)
                this.movie.title = response.data.name
                this.movie.stock = response.data.stock
            })
    }
    
}
</script>

<style scoped>
.header{
  color: white;
  font-size: 10vh;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
}

.background{
    background-color: aqua;
}


</style>


