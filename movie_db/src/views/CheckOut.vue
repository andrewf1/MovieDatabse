<template>
    <div class="background" align="center">
        <div>
            <h1 class="header"> Checkout page </h1>
            <h2> Every movie is $5.99 </h2>
         </div>
        
         <div class="cards" align="center"> 
             <li v-for="item in movies">
                <b-card
                    :title="item.title"
                    :sub-title="item.stock"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                    >
                    <b-card-text>
                    We hope you enjoy your movie experience
                    </b-card-text>

                    <b-button v-on:click="onRemove(item)" variant="primary">Remove</b-button>
                    </b-card>   
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
        onRemove: function (env){
            axios.post('http://localhost:3000/moviecatalog/delete', {mid: env.mid})
                     alert("Successfuly removed from cart")
                 
        },
        getIndex: function(){
            return this.movies.mid
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


