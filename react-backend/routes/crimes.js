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
	var query = {};
	// console.log(query);
	var maxDate = Crime.find({}).sort({crimedate : -1}).limit(1);
	var minDate = Crime.find({}).sort({crimedate : 1}).limit(1);
	console.log(maxDate);
	console.log(minDate);
	//if( req.body.crimedate && req.body.crimedate != ''){
	//	query.crimedate.$gt =  req.body.crimedate.start;
	//  query.crimedate.$lt =  req.body.crimedate.end;
	//}
	//if( req.body.crimetime && req.body.crimetime != ''){
	//	query.crimetime.$gt =  req.body.crimetime.start;
	//	query.crimetime.$lt =  req.body.crimetime.end;
	//}
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
	//if( req.body.threatLevel && req.body.threatLevel != '' && req.body.threatLevel != []){
	//	query.threatlevel =  req.body.threatLevel;
	//}
	console.log(query);
	if(query){
		Crime.find(query, function(err, crimes) {  
			if (err){
				res.send(err);
				console.log(err);
			}
			//console.log(">>>>>>>>>>>>>>>>>");
			//var crimeList = [crimes];
			//console.log('Query' + crimes);
			res.json(crimes);
			}).limit(100);//.where('crimedate').gt(gt).lt(lt).where('crimeTime').gt(crimeTime.gt).lt(crimeTime.lt).limit(8000);
	}
	else{
		Crime.find({}, function(err, crimes) {  
		if (err){
			res.send(err);
			console.log(err);
		}
		//console.log(">>>>>>>>>>>>>>>>>");
		//var crimeList = [crimes];
		//console.log('Query' + crimes);
		res.json(crimes);
		}).limit(8000);
	}
});


module.exports = router;
