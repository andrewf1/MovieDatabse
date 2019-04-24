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
.then(() => console.log("Database connected successfuly for checkout"))

router.post('/', (req, res) => {
  console.log(req.body)
  const mid = [req.body.mid]

//Query the database to check stock amount
  client.query('Select * from check_movie_stock($1::integer)', mid, (err, result) => {

//Query the database to obtain movie title
    client.query('Select title from movie where mid = $1', mid, (err, response) =>  {
        console.log(response.rows[0].title)

        console.log(result.rows[0].check_movie_stock)
        if(result.rows[0].check_movie_stock == true){
          //Stock is greater than 0
          console.log("The result was true")

          res.send({
            bool: result.rows[0].check_movie_stock,
            title: response.rows[0].title
          })
        }

        else {
          console.log("The result was false")
          res.send({
            bool: result.rows[0].check_movie_stock,
            title: response.rows[0].title
          })
        }
    })
  })
})

//Ensuring user does not have 3 movies checked Router
router.post('/moviesrented', (req, res) => {
  console.log(req.body.email)
  client.query('Select * from more_than_three_movies($1::varchar)', [req.body.email], (err, result) => {
    console.log(result.rows[0])
    if(result == true){
      console.log("They have more than 3 movies checkedout")
      res.send({result: result.rows[0].more_than_three_movies})
    }

    else{
      console.log("They have less than 3 movies checkedOut")
      res.send({result: result.rows[0].more_than_three_movies})
    }
  })
})



module.exports = router;
