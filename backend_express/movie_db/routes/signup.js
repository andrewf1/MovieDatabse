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

//This end point will handle adding new users to the datbase
router.post('/', (req, res) => {

  console.log(req.body)
  const address = req.body.address + req.body.city + ', ' + req.body.state + req.body.zipcode
  const signup = [req.body.firstname, req.body.lastname, req.body.email, req.body.dob, address, req.body.password]
  client.query('Select * from insert_customer ($1::varchar, $2::varchar, $3::varchar, $4::date, $5::varchar, $6::varchar)', signup, (err, results) => {
  console.log("This is the response " + results)
  console.log("This is the results " + results.rows[0].insert_customer)
    if(err){
      console.log(err.stack)
    }
    else{
      switch(results.rows[0].insert_customer){

        //Successfully added to database
        case 0:
          res.send('0')
          break
        //Improper email
        case 1:
          res.send('1')
          break
        //Email already exists.
        case 2:
          res.send('2')
          break
      }
    }
    //client.end()
  })
})

module.exports = router;
