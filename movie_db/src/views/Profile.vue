<template>
    <div>
        <div>
            <h1> Welcome, {{user.fname}} {{user.lname}} </h1>

             <b-button v-if="show" v-on:click="reward"> Become reward memeber? </b-button>
        </div>

        <div>
            <h1> Your purchase history </h1>

        </div>

        <div>
            <h1> Update Your info </h1>

            <div class="forms">
                <h2 class="subheader"> Update your email </h2>
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
                <h2> Update your password </h2>
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

                <h2> Update your address </h2>
                 <b-form @submit="onSubmitAddress" v-if="display">
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
    mounted: function (){
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

    methods: {
        reward: function() {
            axios.post('http://localhost:3000/addmember', {email: this.user.email})
                alert("You are now a Movie Bro's reward member")
        },

        onSubmitEmail: function(){
            axios.post('http://localhost:3000/profile/updateemail', {oldemail: this.user.email , newemail: this.form1.email})
                 .then(response => {
                     console.log(response)
                     this.user.email = response.data
                 })

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
    padding: 10vm;
    background-color: aqua;
    min-block-size: 20vh;
}

.subheader{
    padding-top: 10vm;
    padding-bottom: 10vm;
    max-width: 800px;
}

</style>
