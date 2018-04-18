var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CrimeSchema = new Schema(
	{
	crimedate: {type: Date, required: true},
	crimetime: {type: Date, required: true},
	crimecode: {type: String, required: true, max: 10},
	location: {type: String, required: true, max: 50},
	description: {type: String, required: true, max: 50},
	inside_outside: {type: String, enum: ['I', 'O', 'Inside', 'Outside',]},
	weapon: {type: String, max: 25},
	post: {type: Number, max: 5},
	district: {type: String, required: true, max: 20},
	neighborhood: {type: String, required: true, max: 50},
	longitude: {type: Number, required: true, max: 20},
	latitude: {type: Number, required: true, max: 20},
	location_1: {type: Mixed},
	premise: {type: String, max: 15},
	total_incidents: {type: Number, required: true, max: 5}
	}
);


//Export model
module.exports = mongoose.model('Crime', CrimeSchema);