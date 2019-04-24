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
.then(() => console.log("Database connected successfuly for user profile"))

//Used to update users email
router.post('/updateemail', (req, res) => {
  console.log(req.body)
  client.query('Select * from update_customer($1::varchar, $2::varchar, $3::integer)', [req.body.oldemail, req.body.newemail, 1], (err, result) =>{
    if(err){
      console.log(err)
    }
    else
      console.log(result)
      res.send(req.body.newemail)
  })

})

//Used to update users password
router.post('/updatepassword', (req, res) => {
  console.log(req.body)
  client.query('Select * from update_customer($1::varchar, $2::varchar, $3::integer)', [req.body.email, req.body.password, 2], (err, result) => {
    console.log(result)
    if(err)
      console.log(err)
    })
})

//Used to update users address
router.post('/updateaddress', (req, res) => {
  console.log(req.body)
  client.query('Select * from update_customer($1::varchar, $2::varchar, $3::integer)', [req.body.email, req.body.address, 3], (err, result) => {
    console.log(result)
    if(err)
      console.log(err)
    })
})





module.exports = router;
