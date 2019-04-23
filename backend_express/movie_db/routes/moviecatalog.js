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
.then(() => console.log("Database connected successfuly for movie catalog"))

//Responsible for adding movies to the shopping cart
router.put('/', (req, res) => {
  console.log("This function was successfuly hit")
  const movie = [req.body.env.mid]
  client.query('Select * from insert_shopping_cart($1::integer)', movie, (err, result) => {
    console.log(result)
  })

})

module.exports = router;
