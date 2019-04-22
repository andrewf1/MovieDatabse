<template>
  <div class="layout-grid-frame">
    <h1 class="header"> Create a Movie Bro's account </h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

    <b-form-group id="input-group-2" label="First name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.firstname"
          required
          placeholder="Enter first name"
        > </b-form-input>
    </b-form-group>
    
    <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastname"
          required
          placeholder="Enter last name"
        ></b-form-input>
      </b-form-group>

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

      <b-form-group id="input-group-2" label="DOB:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.dob"
          required
          placeholder="YYYY/MM/DD"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Address:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.address"
          required
          placeholder="Enter address"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="City" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.city"
          required
          placeholder="Enter City"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="State:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.state"
          required
          placeholder="Enter State"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Zip Code:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.zipcode"
          required
          placeholder="Enter Zip Code"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Password:" type="password" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-2" label="Confirm Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.confirmpassword"
          required
          placeholder="Confirm Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Sign Up</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          email: '',
          dob: '',
          address: '',
          city: '',
          state: '',
          zipcode: '',
          password: '',
          confirmpassword: ''
        },
        show: true
      }
    },
    methods: {
      // async submit(){

      //   if(!this.form.password.match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")){
      //     alert("Your password must be atleast 8 characters long")
          
      //   }

      //   else if(this.form.password != this.form.confirmpassword){
      //     alert("Your password dooes not match")
      //   }

      //   else {
      //     axios.post('http://localhost:3000/signup', 
      //     {
      //       firstname: this.form.firstname,
      //       lastname: this.form.lastname,
      //       email: this.form.email,
      //       dob: this.form.dob,
      //       address: this.form.address,
      //       city: this.form.city,
      //       state: this.form.state,
      //       zipcode: this.form.zipcode,
      //       password: this.form.password
      //     }
      //     )
      //     console.log("This worked properly")
      // }
      // },
      onSubmit(evt) {
        evt.preventDefault()

        if(this.form.password.match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")){
          alert("Your password must be atleast 8 characters long")
        }

        else if(this.form.password !== this.form.confirmpassword){
          alert("Your passwords do not match")
        }

        else{
           axios.post('http://localhost:3000/signup', 
          {
            firstname: this.form.firstname,
            lastname: this.form.lastname,
            email: this.form.email,
            dob: this.form.dob,
            address: this.form.address,
            city: this.form.city,
            state: this.form.state,
            zipcode: this.form.zipcode,
            password: this.form.password
          }
          )
          console.log("This worked properly")
        }

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.firstname = ''
        this.form.lastname = ''
        this.form.email = ''
        this.form.address = ''
        this.form.city = ''
        this.form.state = ''
        this.form.zipcode = ''
        this.form.password = ''
        this.form.confirmpassword = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    }
  }
</script>

<style scoped>

.header{
    padding-bottom: 7vh;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
}
.layout-grid-frame{
    padding-top: 20vh;
    margin: 0 auto;
    max-width: 800px;
    position: relative;
    padding-bottom: 20vh;
}

</style>
