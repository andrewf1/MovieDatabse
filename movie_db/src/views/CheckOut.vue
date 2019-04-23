<template>
    <div class="background" align="center">
        <div>
            <h1 class="header"> Checkout page </h1>
            <h2> Every movie is $5.99 </h2>
         </div>
        
         <div class="cards"> 
             <ul>
             <li v-for="(movie, key, value) in movies"> 
                 {{movie}} - {{key}} - {{value}}

                 
              <!-- <b-card 
                :title="x.title" 
                :sub-title="x.stock"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
            <b-button href="#" variant="primary">Remove from cart</b-button>
            </b-card>  -->
             </li>
             </ul>
         </div>

         
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        movies: [
            {
                
            }
        ]
      }
    },
    methods: {},

    mounted: function(){
        console.log("Mounted worked properly")
        axios.get('http://localhost:3000/moviecatalog/shoppingcart')
            .then(response => {
                console.log(response.data)
                console.log("This is the title ...." + response.data.rows[0].title_r)
                console.log("This is the stock ... " + response.data.rows[0].stock_r)
                
               
            for (let x = 0; x < response.data.length; x++){

                for(let y = 0; y < response.data.rows.length; y++){
                
                    this.movies.title = response.data.rows[x][y].title_r
                    this.movies.stock = response.data.rows[x][y].stock_r
                }

            }
             for (let x = 0; x < response.data.rows.length; x++){
                //  console.log('This is the value of x' + x)
                 console.log(response.data.rows[x].title_r)

            }

            console.log(response.data.rows.map(i => i.title_r));
                // this.movies.title = response.data.rows[0].title_r
                // this.movies.stock = response.data.rows[0].stock_r
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


</style>


