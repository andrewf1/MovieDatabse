<template>
    <div>
        <h1> Welcome, {{user.fname}} {{user.lname}} </h1>

        <b-button v-if="show" v-on:click="reward"> Become reward memeber? </b-button>
    
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
        }
    },

    
}
</script>

<style scoped>

</style>
