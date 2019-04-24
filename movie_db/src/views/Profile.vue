<template>
    <div>
        <h1> Welcome, {{user.email}} </h1>
    
    </div>
    
</template>
 
<script>
import axios from 'axios'
export default {
    data (){
        return {
            user: {
                email: '',
                name: '',
                password: 'gibs'
            }
        }
    },
    mounted: function (){
        axios.get('http://localhost:3000/session')
            .then(response => {this.user.email = response.data}) 
    }

    
}
</script>

<style scoped>

</style>
