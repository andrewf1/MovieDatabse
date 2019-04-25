<template>
    <div>
        <div>
            <h1> Welcome, {{user.fname}} {{user.lname}} </h1>

             <b-button v-if="show" v-on:click="reward"> Become reward memeber? </b-button>
        </div>

        <div>
            <h1> Your purchase history </h1>
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
                        We hope you enjoyed watching this movie
                        </b-card-text>
                        </b-card>   
                </li>
             </div>

        </div>

        <h1 class="header"> Update Your info </h1>
        <div class="update"> 
        
            <div class="forms">
                <h4 class="subheader"> Update your email </h4>
                <b-form @submit="onSubmitEmail" v-if="display">
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
                >
                    <b-form-input
                    id="input-1"
                    v-model="form1.email"
                    type="email"
                    required
                    placeholder="Enter new email"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Update</b-button>
                </b-form>
            </div>
            <div class="forms">
                <h4 class="subheader"> Update your password </h4>
                <b-form @submit="onSubmitPassword" v-if="display">
                <b-form-group
                    id="input-group-1"
                    label="Password:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form2.password"
                    type="password"
                    required
                    placeholder="Enter new password"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Update</b-button>
                </b-form>
            </div>

            <div class="forms">

                <h4 class="subheader"> Update your address </h4>
                 <b-form @submit="onSubmitAddress" v-if="display" class="bforms">
                <b-form-group
                    id="input-group-1"
                    label="Address:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form3.address"
                    type="address"
                    required
                    placeholder="Enter new address"
                    ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Update</b-button>
                </b-form>
            </div>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios'
export default {
    data (){
        return {
            movies: [],

            user: {
                email: '',
                fname: '',
                lname: '',
            },

            form1: {
                email: '',
            },

            form2: {
                password: ''
            },

            form3: {
                address: ''
            },

            display: true,
        
            show: false
        }
    },
    mounted: 
    function (){
        axios.get('http://localhost:3000/session').then(response => {
            this.user.email = response.data

            axios.post('http://localhost:3000/userinfo', {email: this.user.email})
            .then(response => {
                this.user.fname = response.data.fname_r
                this.user.lname = response.data.lname_r

                
                axios.post('http://localhost:3000/rewardmember', {email: this.user.email})
                .then(response => {
                    this.show = response.data;
                })
            
            })
 
        }) 

    },
    
    //Function to load the purchase history
    function() {
        axios.post('http://localhost:3000/profile/gethistory', {email: this.user.email})
        .then(response => {this.movies.push({})
        })

    },

    methods: {
        reward: function() {
            axios.post('http://localhost:3000/addmember', {email: this.user.email})
                alert("You are now a Movie Bro's reward member")
        },

        onSubmitEmail: function(){
            axios.post('http://localhost:3000/profile/updateemail', {oldemail: this.user.email , newemail: this.form1.email})
                 .then(response => {this.user.email = response.data})
        },

        onSubmitPassword: function(){
             axios.post('http://localhost:3000/profile/updatepassword', {email: this.user.email , password: this.form2.password})
        },

        onSubmitAddress: function (){
              axios.post('http://localhost:3000/profile/updateaddress', {email: this.user.email , address: this.form3.address})

        }
    },

    
}
</script>

<style scoped>
.forms{
    min-block-size: 30vh;
}

.subheader{
    padding-top: 10vm;
    padding-bottom: 10vm;
}

.update{
    display: inline-block;
}

.header{
    padding-bottom: 10vm;
}
</style>
