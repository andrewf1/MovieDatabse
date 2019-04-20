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

pool.query('SELECT * from movie where year = 2017', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'movie_db',
  password: '1234',
  port: 5432,
})
client.connect()

client.query('SELECT * from movie', (err, res) => {
  console.log(err, res)
  client.end()
})


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
app.post('/login',(req, res) =>{
  console.log(req.body.email)
  console.log(req.body.password)
  client.connet()
  client.query('Select validate_credentials From validate_credentials(req.body.email, req.body.password)', (err, res) => {
    console.log(err, res)
    client.end()
  })
})



//Listen for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
