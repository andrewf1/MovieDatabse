<template>
    <div class="background" align="center">
        <div>
            <h1 class="header"> Checkout page </h1>
            <h2> Every movie is ${{price}}</h2>
            <h3> Reward members recieve a 15% discount </h3>
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

             <b-button> Checkout Price: ${{checkoutPrice}} </b-button>
           
         </div>



         
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        email: '',
        movies: [],
        movie1: '',
        movie2: '',
        movie3: '',
        bool1: true,
        bool2: true,
        bool3: true,
        price: '5.99',
        checkoutPrice: ''
      }
    },
    methods: {
        //Function to remove movie from the cart
        onRemove: function (env){
            axios.post('http://localhost:3000/moviecatalog/delete', {mid: env.mid})
                     alert("Successfuly removed from cart")
                 
        },
        getIndex: function(){
            return this.movies.mid
        },

        checkout: function(){
            return 'ashton'

        }

    },

    mounted: function(){
        //Function to load items from the shopping cart onto the page
        axios.get('http://localhost:3000/moviecatalog/shoppingcart')
            .then(response => {       
  
            for (let x = 0; x < response.data.rows.length; x++) {
                this.movies.push({'title': response.data.rows[x].title_r, 'stock': response.data.rows[x].stock_r, 'mid': response.data.rows[x].mid_r })

           //We need to individually store the mid, so we can update the movies on checkout 
              if(response.data.rows[0]){
                    this.movie1 = response.data.rows[x].mid_r
                    console.log("This is the mid for the first movie " + this.movie1)
                }

               else if(response.data.rows[1]){
                    this.movie2 = response.data.rows[x].mid_r
                    console.log("This is the mid for the second movie " + this.movie2)
                }

                else if(response.data.rows[2]){
                    this.movie3 = response.data.rows[x].mid_r
                    console.log("This is the mid for the third movie " + this.movie3)

                }
            }

            //Setting checkout price
                if(response.data.rows.length == 0){
                    this.checkoutPrice = 0.00;
                }

            //Handling checkout price for memebers and non reward members
                else{
                    axios.get('http://localhost:3000/session')
                    .then(getEmail => {
                        this.email = getEmail.data

                    axios.post('http://localhost:3000/rewardmember', {email: this.email})
                        .then(rmember => {
                            if(!rmember.data) {
                                const fiftenPercent = response.data.rows.length * this.price * 0.15
                                const payment = (response.data.rows.length * this.price) - fiftenPercent           
                            }
                            else { 
                                const payme = response.data.rows.length * this.price
                                this.checkoutPrice = payme.toFixed(2)                
                            }
                        })
                    })
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


