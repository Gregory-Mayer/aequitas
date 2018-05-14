var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var bodyParser = require('body-parser')
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://ec2-34-230-59-155.compute-1.amazonaws.com:27017/CrimeData");
var Crime = require('./CrimeModel');
// GET crimes listing. */
/*router.get('/', function(req, res, next) {
   Crime.find({}, function(err, crimes) {  
    if (err){
     res.send(err);
	 console.log(err);
    }
    res.json(crimes);
   }).limit(5000);
});*/
///* post crimes listing. */
router.post('/', function(req, res, next) {
	var query = {};
	var maxDate;
	var minDate
	if(req.body.date.end == ''){
		maxDate = '';
	}
	else{
		maxDate = req.body.date.end;
	}
	if(req.body.date.start == ''){
		minDate = '';
	}
	else{
		minDate = req.body.date.start;
	}
	var maxTime;
	var minTime;
	if(req.body.time.end == null || !(req.body.time.end)){
		maxTime = '24:00:00';
	}
	else{
		maxTime = req.body.time.end + ':00:00';
		if(maxTime.length < 8){ //formats the data
			maxTime = '0' + maxTime
		}
		
	}
	if(req.body.time.start == null || !(req.body.time.start)){
		minTime = '00:00:00';
	}
	else{
		minTime = req.body.time.start + ':00:00';
		if(minTime.length < 8){//formats the data
			minTime = '0' + minTime
		}
	}
	query.crimetime = { '$lt' : maxTime, '$gt' : minTime, };
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
	if(query && minDate != '' && maxDate != ''){
		Crime.find(query, function(err, crimes) {  
			if (err){
				res.send(err);
				console.log(err);
			}
			res.json(crimes);
			}).maxTime(10000).where('crimedate').gt(minDate).lt(maxDate);
	}
	else if(query){
		Crime.find(query, function(err, crimes) {  
			if (err){
				res.send(err);
				console.log(err);
			}
			res.json(crimes);
			}).maxTime(10000);
	}
	else{
		Crime.find({}, function(err, crimes) {  
		if (err){
			res.send(err);
			console.log(err);
		}
		res.json(crimes);
		}).maxTime(10000);
	}
});


module.exports = router;
