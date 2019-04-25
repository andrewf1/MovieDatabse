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
             <b-button v-on:click="checkout()"> Checkout Price: ${{checkoutPrice}} </b-button>
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
        movies2: [],
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

//Function will be executed when the user hits the check out button
        checkout: function(){

//Check to see if more than 3 movies are checked out at once
            axios.post('http://localhost:3000/checkout/moviesrented', {email: this.email})
            .then(result => { 
                console.log("Are there too many movies checked out? " + result.data.result)
                if(result.data.result === true){
                    alert("You have too many movies checked out")
            }

            else{
                let check1 = true;
                for(let i = 0; i < this.movies2.length; i++){
                //Checks to see if the movie is out of stock
                    axios.post('http://localhost:3000/checkout', {mid: this.movies2[i].mid})
                    .then(response => { 
                        if(response.data.bool === false){
                            alert(response.data.title + " is out of stock. Please remove from shopping cart")
                            check1 = false;
                        }
                    })

                }

                if(check1 === true){
                    for(let i = 0; i < this.movies2.length; i++){
                    //Adds the movies to the purchase history
                        axios.post('http://localhost:3000/checkout/addhistory', {email: this.email, mid: this.movies2[i].mid})
                        .then(added => {
                            console.log('The add to history function was called with email = ' + this.email + ' and this mid = ' +
                            this.movies2[i].mid)
                            console.log("The movie was added" + added)
                        })

                    //Decrement the stock for the movies checkedout
                        console.log('this is the movie we are updating: ' + this.movies2[i].mid)
                        axios.post('http://localhost:3000/checkout/updatestock', {mid: this.movies2[i].mid})
                        .then(stocked => {
                            console.log(stocked.data)
                        })
                    }
                }
            //Clear the shopping cart
                axios.post('http://localhost:3000/checkout/clearcart')
                this.$router.push({path : 'profile'})
            }
        })        
            
    },
    //Function to check if user has more than 3 movies checked out
        movierental: function(){
            axios.post('http://localhost:3000/checkout/moviesrented', {email: this.email})
            .then(response => {
                console.log(response.data.result)
                if(response.data.result === true){
                    alert("You have too many movies checked out")
                }
            })
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
                    this.movies2.push({'mid': response.data.rows[x].mid_r})
                }

               else if(response.data.rows[1]){
                    this.movies2.push({'mid': response.data.rows[x].mid_r})
                }

                else if(response.data.rows[2]){
                    this.movies2.push({'mid': response.data.rows[x].mid_r})
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


