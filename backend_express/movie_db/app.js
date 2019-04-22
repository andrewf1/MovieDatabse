const express = require('express')
const cors = require('cors')
const { Pool, Client } = require('pg')
const bodyParser = require('body-parser')
const signup = require('./routes/signup')
const userRoute = require('./routes/users')
const app = express()
const port = 3000

//Routes to be handled
app.use('/signup', signup)
app.use('/users', userRoute)

//Body bodyParse
app.use(bodyParser.json())
//cors
app.use(cors())

//

//Connection for the database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'movie_db',
  password: '1234',
  port: 5432,
})

// pool.query('SELECT * from movie where year = 2017', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'movie_db',
  password: '1234',
  port: 5432,
})
client.connect()
.then(() => console.log("Database connected successfuly"))
.catch(e => console.log("The error is" + e))
// .finally(() => client.end())

// client.query('SELECT * from movie', (err, res) => {
//   console.log(err, res)
//   //client.end()
// })


// Endpoint for the login page
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({
    name: req.body.name,
    password: req.body.password
  })
})

//Endpoint should recieve email and password from the frontend
app.post('/login',(req, res) => {
  console.log(req.body)
  client.query('Select * from validate_credentials ($1, $2)', [req.body.email, req.body.password], (err, result) => {
    console.log("This is the results from the db " + result.rows[0].validate_credentials)
    if(err){
      console.log(err)
    }

    else{
      if(result.rows[0].validate_credentials == true)
        res.send('true')
      else {
        res.send('false')
      }

    }
    //client.end()
  })
})


//Listen for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
