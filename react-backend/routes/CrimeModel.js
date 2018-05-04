var mongoose = require('mongoose');
mongoose.set('debug', true)


var CrimeSchema = new mongoose.Schema(
	{
	crimedate: {type: String, required: true},
	crimetime: {type: String, required: true},
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
	location_1: {type: String, max: 50},
	premise: {type: String, max: 15},
	total_incidents: {type: Number, required: true, max: 5},
	threatlevel: {type: String, max: 15}
	}//, { collection: 'Crime' }
);


//Export model
 var CrimeModel = mongoose.model('Crime', CrimeSchema);
 module.exports = CrimeModel;
