var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var bodyParser = require('body-parser')
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://ec2-34-230-59-155.compute-1.amazonaws.com:27017/CrimeData");
var Crime = require('./CrimeModel');
/* GET crimes listing. */
//router.get('/', function(req, res, next) {
//   Crime.find({}, function(err, crimes) {  
//    if (err){
//     res.send(err);
//	 console.log(err);
//    }
//    res.json(crimes);
//   }).limit(5000);
//});
///* post crimes listing. */
router.post('/', function(req, res, next) {
	//console.log("HERE");
	//console.log(req.body);
	// var gt = '2018-01-01';
	// var lt = '2018-05-04';
	//	console.log(req.body);
	var query = {};
	if(req.body.date.end == null){
		console.log('Here in max Date');
		var maxDate = Crime.find({}).sort({crimedate : -1}).limit(1);
	}
	else{
		var maxDate = req.body.date.end;
	}
	if(req.body.date.start == null){
		console.log('Here in min Date');
		var minDate = Crime.find({}).sort({crimedate : 1}).limit(1);
	}
	else{
		var minDate = req.body.date.start;
	}
	console.log(maxDate);
	console.log(minDate);
	if(req.body.time.end == null){
		var maxTime = '24:00:00';
	}
	else{
		var maxTime = req.body.time.end + ':00:00';
		if(maxTime.length < 8){
			maxTime = '0' + maxTime
		}
	}
	if(req.body.time.start == null){
		var minTime = '00:00:00';
	}
	else{
		var minTime = req.body.time.start + ':00:00';
		if(minTime.length < 8){
			minTime = '0' + minTime
		}
	}
	console.log(maxTime);
	console.log(minTime);
	if( req.body.description && req.body.description != '' && req.body.description != []){
		query.description =  req.body.description;
	}
	if( req.body.district && req.body.district != '' && req.body.district != []){
		query.district =  req.body.district;
	}
	if( req.body.inside_outside && req.body.inside_outside != '' && req.body.inside_outside != []){
		query.inside_outside =  req.body.inside_outside;
	}
	if( req.body.weapon && req.body.weapon != '' && req.body.weapon != []){
		query.weapon =  req.body.weapon;
	}
	if( req.body.threatlevel && req.body.threatlevel != '' && req.body.threatlevel != []){
		query.threatlevel = { '$in' : req.body.threatlevel};
	}
	//console.log(query);
	if(query){
		Crime.find(query, function(err, crimes) {  
			if (err){
				res.send(err);
			//	console.log(err);
			}
			//console.log(">>>>>>>>>>>>>>>>>");
			//var crimeList = [crimes];
			//console.log('Query' + crimes);
			res.json(crimes);
			}).where('crimetime').gt(minTime).lt(maxTime).limit(100);//.where('crimedate').gt(minDate).lt(maxDate).where('crimetime').gt(minTime).lt(maxTime).limit(100);
	}
	else{
		Crime.find({}, function(err, crimes) {  
		if (err){
			res.send(err);
		//	console.log(err);
		}
		//console.log(">>>>>>>>>>>>>>>>>");
		//var crimeList = [crimes];
		//console.log('Query' + crimes);
		res.json(crimes);
		}).limit(8000);
	}
});


module.exports = router;
