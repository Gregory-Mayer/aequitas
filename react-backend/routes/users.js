var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://ec2-34-230-59-155.compute-1.amazonaws.com:27017/CrimeData");
var Crime = require('./CrimeModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req);
	//console.log(res);
	//console.log(next);
  //res.send('respond with a resource');
  // And insert something like this instead:
   // res.json([{
     // id: 1,
     // username: "Andrew"
   // }, {
     // id: 2,
     // username: "Arjun"
   // }]);
  
 // var monthRec = req.query.month;
 //var yearRec = req.query.year;
 //if(monthRec && monthRec != 'All'){
  Crime.find({/*$and: [ {month: monthRec}, {year: yearRec}]*/}, function(err, crimes) {  
   if (err){
    res.send(err);
	console.log(err);
   }
   console.log(">>>>>>>>>>>>>>>>>");
   //var crimeList = [crimes];
   console.log(crimes);
   res.json(crimes);
  }).limit(10000);
 // } else {
  // Crime.find({/*year: yearRec*/}, function(err, crimes) {
   // if (err)
    // res.send(err);
   // res.json(crimes);
  // });
 // }
  
});


module.exports = router;
