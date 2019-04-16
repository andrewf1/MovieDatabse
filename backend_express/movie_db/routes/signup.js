const express = require('express')
// const bodyParser = require('body-parser')
const router = express.Router()


/*  Sign Up Page Handlers */
 router.get('/', function(req,res){
   res.send("Hello welcome to the signup page")
 })

router.get('/about', function(req,res){
  //console.log(req.body)
  res.send(
    // name: req.body.name,
    // password: req.body.password
    "Welcome Ashton"
  )
})

router.post()

module.exports = router;
