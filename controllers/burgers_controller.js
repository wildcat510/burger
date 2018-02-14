const express = require('express');
const router = express.Router();


//ROUTES
const burgers = require('../models/burger.js'); //model leveraging our ORM

router.get('/', function(req, res) {
  burgers.selectAll(function(data) {
  var hbsObject = {
    burgers: data,
    title: "Burgers Galore!"
  };
  res.render('index', hbsObject);
});
});


router.post('/burgers', function(req, res) {
  burgers.insertOne(['burger_name'], [req.body.burger_name], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res){
  
	var condition = "id = " + req.params.id;
	  burgers.updateOne({
      devoured: true
   }, condition, function(data) {
    res.redirect('/');
  });

});

module.exports = router;