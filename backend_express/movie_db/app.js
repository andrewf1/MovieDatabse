const express = require('express')
const { Pool, Client } = require('pg')
const routes = require('./routes/signup')
const app = express()
const port = 3000

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'movie_db',
  password: 'spassword',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'movie_db',
  password: 'password',
  port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})



app.use(routes)
app.get('/', (req, res) => res.send('Hello World!'))
//Listen for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
