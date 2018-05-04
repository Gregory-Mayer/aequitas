var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://ec2-34-230-59-155.compute-1.amazonaws.com:27017/CrimeData");
var Crime = require('./CrimeModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
	
   Crime.find({}, function(err, crimes) {  
    if (err){
     res.send(err);
	 console.log(err);
    }
    console.log("TEST");
    //var crimeList = [crimes];
    console.log('no query' + crimes);
    res.json(crimes);
   }).limit(10);
});
router.get('/query', function(req, res, next) {
	console.log(req.query);
	var crimedateStartRec = req.query.crimedate.start;
	var crimedateEndRec = req.query.crimedate.end;
	var crimetimeStartRec = req.query.crimetime.start;
	var crimetimeEndRec = req.query.crimetime.end;
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
	var threatlevelRec = req.query.threatlevel;
	
	console.log( "Values: " + crimedateStartRec + " " + crimedateEndRec  + " " + crimetimeStartRec  + " " + crimetimeEndRec  + " " + crimecodeRec  + " " + locationRec  + " " + descriptionRec  + " " + inside_outsideRec  + " " + weaponRec  + " " + postRec  + " " + districtRec  + " " + neighborhoodRec  + " " + longitudeRec  + " " + latitudeRec  + " " + location_1Rec  + " " + premiseRec  + " " + total_incidentsRec  + " " + threatlevelRec );
	
	
 if(crimedateStartRec && crimedateEndRec && crimetimeStartRec && crimetimeEndRecRec && crimecodeRec && locationRec && descriptionRec && inside_outsideRec && weaponRec && postRec && districtRec && neighborhoodRec && longitudeRec && latitudeRec && location_1Rec && premiseRec && total_incidentsRec){
  Crime.find({crimedate : crimedateRec, crimetime : crimetimeRec, crimecode : crimecodeRec, location : locationRec, description : descriptionRec, inside_outside : inside_outsideRec, weapon : weaponRec, post : postRec, district : districtRec, neighborhood : neighborhoodRec, longitudeRec : longitudeRec, latitude : latitudeRec, location_1 : location_1Rec, premise : premiseRec, total_incidents : total_incidentsRec, threatlevel : threatlevelRec }, function(err, crimes) {  
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
   Crime.find({}, function(err, crimes) {  
    if (err){
     res.send(err);
	 console.log(err);
    }
    console.log("TEST");
    //var crimeList = [crimes];
    console.log('no query' + crimes);
    res.json(crimes);
   }).limit(10);
  
  }
});


module.exports = router;
