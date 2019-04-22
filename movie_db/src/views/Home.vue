<template>
  <div>
    <div justify-center class="banner">
        <h1 class="head"> Movies For Everyone.</h1>
        <h2 class="second"> Millions of movies at your fingertips </h2>
         <b-button to="signup">Sign Up</b-button>
    </div>
        <div class="login">
            <h2>Login </h2>
            <b-form @submit="onSubmit" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group> 

            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>

    </div>
    <b-container fluid class="movies">
      <h1 class="subheader"> NEW ARRIVALS </h1>

      <b-row>
        <b-col>
          <b-img src="http://www.gstatic.com/tv/thumb/v22vodart/14060049/p14060049_v_v8_ad.jpg" class="image"></b-img>
          <p class="small"> Captain Marvel </p>
        </b-col>

        <b-col>
          <b-img src="https://m.media-amazon.com/images/M/MV5BYTExYTc3YTMtMDY2YS00YTFhLTgwODEtNWQ2MmMzOGZhNTU5XkEyXkFqcGdeQXVyNDExODY2MjU@._V1_.jpg" class="image"></b-img>
          <p class="small"> A Madea Family Funeral </p>
        </b-col>

        <b-col>
          <b-img src="http://allears.net/wp-content/uploads/2019/01/Dumbo-Live-Movie-Poster.jpg" class="image"></b-img>
          <p class="small"> Dumbo </p>
        </b-col>

        <b-col>
          <b-img src="https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg" class="image"></b-img>
          <p class="small"> Us </p>
        </b-col>

        <b-col>
          <b-img src="https://www.joblo.com/assets/images/joblo/posters/2018/10/The-Upside-poster-1_thumb.jpg" class="image"></b-img>
          <p class="small"> The Upside </p>
        </b-col>
    
      </b-row>
   
      

    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import { stringify } from 'querystring';
  export default {
    data() {
      return {
        res1: true,
        res2: false,
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        
        axios
        .post('http://localhost:3000/login', {
          email: this.form.email,
          password: this.form.password
        })
        .then(response => {

          console.log(stringify(response))
          if(response.data == this.res2){
            alert("Your email or password is incorrect")
          }

          else 
            this.$router.push({path : 'signup'})

        })


      },
    }
  }
</script>


<style scoped>
.banner{
  min-height: 70vh;
  background-size: cover;
  background-image: url("https://images.unsplash.com/6/blurred_lines.jpeg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  padding-top: 20vh;
}
.head{
  color: white;
  font-size: 10vh;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
}

.second{
  color: white;
  margin-bottom: 5vh;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}

.movies{
  background-color: lightcoral;
  min-height: 80vh;
  padding: 7vh;
}

.subheader{
  font-size: 8vh;
  font-family: 'Courier New', Courier, monospace;
  color: white;
  padding-bottom: 5vh;
}

.login{
  background-color: aliceblue;
  min-height: 20vh;
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

.login{
    padding-top: 20vh;
    margin: 0 auto;
    max-width: 800px;
    position: relative;
    padding-bottom: 20vh;
}


</style>

