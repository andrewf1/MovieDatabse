const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json())

/* GET users listing. */
router.use(function(req,res,next){
  console.log("middleware for users")
  next()
})

router.get('/', function(req, res){
  res.send('respond with a resource')
})

router.post('/ashton', function(req, res){
  console.log(req.body)
  res.send({
    name: req.body.name
  })
})

module.exports = router;
