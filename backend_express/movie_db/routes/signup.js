const express = require('express');
const router = express.Router();

/*  Sign Up Page Handlers */
router.get('/signup', function(req, res){
  res.send({type: 'GET'})
});

//Add new customer to the db
router.post('/signup', function(req, res){
  res.send({type: 'POST'})
});

router.get('/signup', function(req, res){
  res.send({type: 'GET'})
});

router.get('/signup', function(req, res){
  res.send({type: 'GET'})
});

module.exports = router;
