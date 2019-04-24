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

//Responsoble for obtaining items from the shopping cart
router.get('/shoppingcart', (req, res) => {
  client.query('Select * from get_all_shopping_cart()', (err, result) => {
    console.log(result)
    res.send(result)
  })
})

//Responsoble for deleting an item from the shopping cart
router.post('/delete', (req, res) => {
  console.log(req.body.mid)
  const mid = [req.body.mid]
  client.query('Select * from delete_shopping_cart($1::integer)', mid , (err, result) => {
    console.log(result)
    res.send(result)
  })
})

module.exports = router;
