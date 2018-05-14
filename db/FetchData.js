var express = require('express');
var app = express();

// API call
var url = "https://data.baltimorecity.gov/resource/4ih5-d5d5.json?$limit=500000"
var request = require('request');

request(url, function(error, response, body){
    if(!error && response.statusCode == 200){
	var data = JSON.parse(body);

	// add threat level field
	data.map(function(data){
	    data.threatlevel = 0;
	});
	

	
	for (var key in data){
	    if (data.hasOwnProperty(key)){

		// clean up the data 
		var date = data[key].crimedate;
		date = date.slice(0,-13);
		data[key].crimedate = date;

		var in_out = data[key].inside_outside;
		if (in_out == "I"){
		    data[key].inside_outside = "Inside";
		}
		else if (in_out == "O")
		    data[key].inside_outside = "Outside";

		// rank weapons
		var weapon = data[key].weapon;
		switch (weapon){
		case "OTHER":
		    weapon = 2;
		    break;
		case "HANDS":
		    weapon = 1;
		    break;
		case "FIRE":
		    weapon = 1;
		    break;
		case "FIREARM":
		    weapon = 4;
		    break;
		case "KNIFE":
		    weapon = 2;
		    break;
		
		case undefined:
		    weapon = 0;
		    break;
		}

		// clean up and rank descriptions
		var description = data[key].description;
		if (description == "LARCENY FROM AUTO")
		    data[key].description = "LARCENY- FROM AUTO";
		
		var ds = ["LARCENY","AUTO THEFT","BURGLARY","AGG. ASSAULT","COMMON ASSAULT","LARCENY FROM AUTO","ARSON","ROBBERY - STREET","ROBBERY - CARJACKING","ASSAULT BY THREAT","RAPE","ROBBERY - RESIDENCE","ROBBERY - COMMERCIAL","SHOOTING","HOMICIDE","LARCENY- AUTO ACC","LARCENY- SHOPLIFTING","LARCENY- OTHER","LARCENY- FROM AUTO","LARCENY- FROM MACHIN","LARCENY- FROM BLDG.","LARCENY- BICYCLE","LARCENY- FROM LOCKER","LARCENY- PICKPOCKET",undefined];

		var dRank = [1,2,2,2,2,1,2,2,2,1,2,2,2,3,3,1,1,1,1,1,1,1,1,1,0];

		// map description to rank
		for (var d in ds){
		    if (description == ds[d]){
			description = dRank[d];
			break;
		    }
		}

		// set threat level
		var threat = description + weapon;
		if (threat <= 2)
		    threat = "LOW";
		else if (threat <= 4)
		    threat = "MEDIUM";
		else
		    threat = "HIGH";
		data[key].threatlevel = threat;
		
	    }
	}

	app.get('/', function (req, res){
	    res.send(data);
	});

	var mongoClient = require('mongodb').MongoClient;
	var url = "mongodb://ec2-34-230-59-155.compute-1.amazonaws.com/CrimeData";

	mongoClient.connect(url, function(err, db) {
	    if (err) throw err;
	    
	    var myobj = data;
	    const crimeData = db.db('CrimeData');
	    crimeData.collection("crimes").drop();//Empties database in preparation for refilling
	        
	        
	    crimeData.collection("crimes").insert(myobj, function(err, res) {//Inserting data from Balimore API Crime database
		if (err) throw err;
		
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	    });
	    
	    
	});
	
    }
});


