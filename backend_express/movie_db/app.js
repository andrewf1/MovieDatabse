const express = require('express')
const routes = require('./routes/signup')
const app = express()
const port = 3000



app.use(routes)

app.get('/', (req, res) => res.send('Hello World!'))


//Listen for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
