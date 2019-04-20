const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { Pool, Client } = require('pg')
const cors = require('cors')

router.use(bodyParser.json())
router.use(cors())
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'movie_db',
  password: '1234',
  port: 5432,
})
client.connect()
.then(() => console.log("Database connected successfuly for users"))



/*  Sign Up Page Handlers */
 // router.get('/', function(req,res){
 //   res.send("Hello welcome to the signup page")
 // })

router.post('/', (req, res) => {
  
  console.log(req.body)
  const address = req.body.address + req.body.city + ', ' + req.body.state + req.body.zipcode
  const signup = [req.body.firstname, req.body.lastname, req.body.email, req.body.dob, address, req.body.password]
  client.query('Select * from insert_customer ($1::varchar, $2::varchar, $3::varchar, $4::date, $5::varchar, $6::varchar)', signup, (err, res) => {
  console.log("This is the response " + res)
    if(err){
      console.log(err.stack)
    }
    else{
      console.log(res)
    }
    //client.end()
  })
})

module.exports = router;
