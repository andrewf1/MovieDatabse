<template>
    <div>
        <h1> Welcome, {{user.fname}} {{user.lname}} </h1>
    
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
                lname: ''
            }
        }
    },
    mounted: function (){
        axios.get('http://localhost:3000/session').then(response => {
            this.user.email = response.data

            axios.post('http://localhost:3000/userinfo', {email: this.user.email})
            .then(response => {
                console.log("This is the email " + this.user.email)
                console.log("This is the response " + response.data.fname_r)
                this.user.fname = response.data.fname_r
                this.user.lname = response.data.lname_r
            })
        }) 

        
    }

    
}
</script>

<style scoped>

</style>
