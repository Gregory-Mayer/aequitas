var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://ec2-34-230-59-155.compute-1.amazonaws.com:27017/CrimeData");
var Crime = require('./CrimeModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req);
	var crimedateRec = req.query.crimedate;
	var crimetimeRec = req.query.crimetime;
	var crimecodeRec = req.query.crimecode;
	var locationRec = req.query.location;
	var descriptionRec = req.query.description;
	var inside_outsideRec = req.query.inside_outside;
	var weaponRec = req.query.weapon;
	var postRec = req.query.post;
	var districtRec = req.query.district;
	var neighborhoodRec = req.query.neighborhood;
	var longitudeRec = req.query.longitude;
	var latitudeRec = req.query.latitude;
	var location_1Rec = req.query.location_1;
	var premiseRec = req.query.premise;
	var total_incidentsRec = req.query.total_incidents;
	
 if(crimedateRec && crimetimeRec && crimecodeRec && locationRec && descriptionRec && inside_outsideRec && weaponRec && postRec && districtRec && neighborhoodRec && longitudeRec && latitudeRec && location_1Rec && premiseRec && total_incidentsRec){
  Crime.find({/*$and: [ {month: monthRec}, {year: yearRec}]*/}, function(err, crimes) {  
   if (err){
    res.send(err);
	console.log(err);
   }
   console.log(">>>>>>>>>>>>>>>>>");
   //var crimeList = [crimes];
   console.log('Query' + crimes);
   res.json(crimes);
  }).limit(10);
 }
  else{
   Crime.find({/*$and: [ {month: monthRec}, {year: yearRec}]*/}, function(err, crimes) {  
    if (err){
     res.send(err);
	 console.log(err);
    }
    console.log(">>>>>>>>>>>>>>>>>");
    //var crimeList = [crimes];
    console.log('no query' + crimes);
    res.json(crimes);
   }).limit(10);
  
  }
});


module.exports = router;
