var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CrimeSchema = new Schema(
	{
	Crime_Date: {type: Date, required: true},
	Crime_Time: {type: Date, required: true},
	Crime_Code: {type: String, required: true, max: 10},
	Location: {type: String, required: true, max: 50},
	Description: {type: String, required: true, max: 50},
	Inside/Outside: {type: String, enum: ['I', 'O', 'Inside', 'Outside',]},
	Weapon: {type: String, max: 25},
	Post: {type: Number, max: 5},
	District: {type: String, required: true, max: 20},
	Neighborhood: {type: String, required: true, max: 50},
	Longitude: {type: Number, required: true, max: 20},
	Latitude: {type: Number, required: true, max: 20},
	Location1: {type: Mixed},
	Premise: {type: String, max: 15},
	Total_Incidents: {type: Number, required: true, max: 5}
	}
);


//Export model
module.exports = mongoose.model('Crime', CrimeSchema);