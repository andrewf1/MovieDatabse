const express = require('express')
const router = express.Router()


/*  Sign Up Page Handlers */
 router.get('/', function(req,res){
   res.send("Hello welcome to the signup page")
 })

router.get('/about', function(req,res){
  res.send("Welcome Ashton")
})

router.post('/james', (req, res) =>{
  res.send({
    name: req.body.name
  })
})

// router.post('/ashton',function(req,res){
//   console.log("This function isnt working")
//   console.log(req.body)
//   res.send({
//     name: req.body.name,
//     password: req.body.password
//   })
// })

module.exports = router;
