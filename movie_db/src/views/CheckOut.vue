<template>
    <div class="background" align="center">
        <div>
            <h1 class="header"> Checkout page </h1>
            <h2> Every movie is $5.99 </h2>
         </div>
        
         <div class="cards"> 
              
             <li v-for="movie in movies" class="drop">
                 {{movie.title}} - {{movie.stock}}
                 <b-button v-on:click="onRemove" size="sm"> Remove from cart </b-button>
            </li>
    

             <b-button> Checkout </b-button>
         </div>



         
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        movies: []
      }
    },
    methods: {
        onRemove: function (){
            console.log(this.movie.mid)
            axios.post('http://localhost:3000/moviecatalog/delete', {mid: this.movies.mid})
                 .then(response => {
                     if(response.data === 1){
                         alert("Successfully deleted from shopping cart")
                     }

                     if(response.data === 0){
                         alert("Removal unsuccessful")
                     }
                 })
        }
    },

    mounted: function(){
        axios.get('http://localhost:3000/moviecatalog/shoppingcart')
            .then(response => {            
            for (let x = 0; x < response.data.rows.length; x++) {
                this.movies.push({'title': response.data.rows[x].title_r, 'stock': response.data.rows[x].stock_r, 'mid': response.data.rows[x].mid_r })
            }
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

.cards{
    padding: 2vm;
    align-self: center;
}

.drop{
    padding: 30vm;
    font-family: 'Courier New', Courier, monospace;
}


</style>


