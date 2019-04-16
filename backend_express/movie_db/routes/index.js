var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login'function(req, res, next){
  const login = {
    email: req.body.email,
    password: req.body.password
  };
  res.status(201).json({
    login: login
  });

});

module.exports = router;
