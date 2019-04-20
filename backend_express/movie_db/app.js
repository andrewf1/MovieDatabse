const express = require('express')
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
//app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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


// Endpoints
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({
    name: req.body.name,
    password: req.body.password
  })
})

app.post('/signup/ashton',(req,res) => {
  console.log("This is working")
  res.send({
    name: req.body.name,
    password: req.body.password
  })
})


  // const login = {
  //   name: req.body.name,
  //   password: req.body.password
  // } => res.send({
  //   login: login
  // })
//

// app.post('/',function(req, res){
//   const login = {
//     email: req.body.email,
//     password: req.body.password
//   }
//   res.status(201).send(login)
//
// })
//Listen for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
