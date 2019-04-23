<template>
    <div>
     <b-container fluid class="movies">
        <h1 class="subheader"> Comedy Movies </h1>

        <b-row>
            <b-col>
            <b-img src="https://art-s.nflximg.net/8d056/253fc71de6915dea5125be2016b2e565cf28d056.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie1.name}} </p>
            <b-button v-on:click="count(movies.movie1)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="http://www.moviemars.com/GetProductImage.ashx?i=19452321.jpg&w=500&/19452321_500.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie2.name}}</p>
            <b-button v-on:click="count(movies.movie2)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/71tcRxPDnjL._SY606_.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie3.name}} </p>
            <b-button v-on:click="count(movies.movie3)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/51oUqGb18cL.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie4.name}} </p>
            <b-button v-on:click="count(movies.movie4)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://dtvimages.hs.llnwd.net/e1//db_photos/movies/AllPhotosAPGI/16298/16298_aa.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie5.name}} </p>
            <b-button v-on:click="count(movies.movie5)">Add to Cart </b-button>
            </b-col>
        </b-row>
    </b-container>
         <b-container fluid class="movies">
        <h1 class="subheader"> Horror Movies </h1>

        <b-row>
            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/61bMkkwpduL._SY679_.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie6.name}} </p>
            <b-button v-on:click="count(movies.movie6)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie7.name}} </p>
            <b-button v-on:click="count(movies.movie7)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie8.name}} </p>
            <b-button v-on:click="count(movies.movie8)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Insidious_poster.jpg/220px-Insidious_poster.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie9.name}} </p>
            <b-button v-on:click="count(movies.movie9)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://ae01.alicdn.com/kf/HTB11XhjAiCYBuNkSnaVq6AMsVXab/DIY-frame-Hush-Silence-Can-Be-Killer-Horror-Movie-Film-posters-and-print-home-decor-art.jpg_640x640.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie10.name}} </p>
            <b-button v-on:click="count(movies.movie10)">Add to Cart </b-button>
            </b-col>
        
        </b-row>
    </b-container>
         <b-container fluid class="movies">
        <h1 class="subheader"> Romance Movies </h1>

        <b-row>
            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/51Td3Eetr5L.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie11.name}} </p>
            <b-button v-on:click="count(movies.movie11)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="http://static1.squarespace.com/static/51d35c6ee4b0564d574c83a7/53124d11e4b0d6e4133c223e/5a7e18f99140b748a4c9c686/1550799532388/?format=1500w" class="image"></b-img>
            <p class="small"> {{movies.movie12.name}} </p>
            <b-button v-on:click="count(movies.movie12)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/51uJgSJ3TIL.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie13.name}} </p>
            <b-button v-on:click="count(movies.movie13)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/61PF6Oi%2BUhL._SY679_.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie14.name}} </p>
            <b-button v-on:click="count(movies.movie14)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/51gEpO63aRL.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie15.name}} </p>
            <b-button v-on:click="count(movies.movie15)">Add to Cart </b-button>
            </b-col>
        
        </b-row>
    </b-container>
         <b-container fluid class="movies">
        <h1 class="subheader"> Action Movies </h1>

        <b-row>
            <b-col>
            <b-img src="http://www.gstatic.com/tv/thumb/v22vodart/14060049/p14060049_v_v8_ad.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie16.name}} </p>
            <b-button v-on:click="count(movies.movie16)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/A1wxXiiMuYL._SY679_.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie17.name}}</p>
            <b-button v-on:click="count(movies.movie17)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/61apTYdaRXL.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie18.name}} </p>
            <b-button v-on:click="count(movies.movie18)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/518jo3Xlf8L.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie19.name}} </p>
            <b-button v-on:click="count(movies.movie19)">Add to Cart </b-button>
            </b-col>

            <b-col>
            <b-img src="https://images-na.ssl-images-amazon.com/images/I/719SFBdxRtL._SY550_.jpg" class="image"></b-img>
            <p class="small"> {{movies.movie20.name}} </p>
            <b-button v-on:click="count(movies.movie20)">Add to Cart </b-button>
            </b-col>
        
        </b-row>
    </b-container>



    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            counter: 0,
            cart: [],
            movies: {
                movie1:{
                    name: '22 Jump Street',
                    mid: '2'
                },
                movie2: {
                    name: 'Ride Along',
                    mid: '8'
                },
                movie3: {
                    name: 'Bridesmaids',
                    mid: '3'
                },
                movie4: {
                    name: 'Stepbrothers',
                    mid: '4'
                },
                movie5: {
                    name: 'Dumb and Dumber',
                    mid: '5'
                },
                movie6: {
                    name: 'It',
                    mid: '11'
                },
                movie7: {
                    name: 'Get Out',
                    mid: '12'
                },
                movie8: {
                    name: 'The Conjuring',
                    mid: '13'
                },
                movie9: {
                    name: 'Insidious',
                    mid: '14'
                },
                movie10: {
                    name: 'Hush',
                    mid: '19'
                },
                movie11: {
                    name: 'The Notebook',
                    mid: '21'
                },
                movie12: {
                    name: 'Pretty in Pink',
                    mid: '28'
                },
                movie13: {
                    name: 'Twilight',
                    mid: '24'
                },
                movie14: {
                    name: 'Dirty Dancing',
                    mid: '25'
                },
                movie15: {
                    name: 'Titanic',
                    mid: '26'
                },
                movie16: {
                    name: 'Captain Marvel',
                    mid: '78'
                },
                movie17: {
                    name: 'Wonder Woman',
                    mid: '71'
                },
                movie18: {
                    name: 'Black Panther',
                    mid: '72'
                },
                movie19: {
                    name: 'Venom',
                    mid: '74'
                },
                movie20: {
                    name: 'The Avengers',
                    mid: '77'
                }
            }
        }
    },

    methods: {
        count: function(env) {
            if(this.counter != 3){
                this.counter += 1
                this.cart.push(env)
                axios.put('http://localhost:3000/moviecatalog', {env})
                alert("Successfully added to cart")
            }
            else{
                alert("Shopping cart is full")
            }
        },



    }
    
}
</script>

<style scoped>
.movies{
  background-color: lightcoral;
  min-height: 40vh;
  padding: 7vh;
}

.subheader{
  font-size: 8vh;
  font-family: 'Courier New', Courier, monospace;
  color: white;
  padding-bottom: 5vh;
}

.image{
width: 180px;
height: 275px;
}

.small{
  font-size: 25px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  padding-top: 1.5vh;
  color: white;
}

</style>


