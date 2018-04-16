var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PreferenceSchema = new Schema(
	{
	Username: {type: String, required: true, max: 25},
	Favorite_View: {type: String, enum: ['All', 'Map', 'Graph', 'Table',]},
	Favorite_Date_Range_Start: {type: Date},
	Favorite_Date_Range_End: {type: Date},
	Favorite_Time_Range_Start: {type: Date},
	Favorite_Time_Range_End: {type: Date},
	Favorite_Map_Type: {type: String, enum: ['Heat', 'Pin',]},
	Favorite_Chart_Type: {type: String, enum: ['Bar', 'Pie', 'Line',]},
	Favorite_Filter: {type: String, enum: ['Crime_Date', 'Crime_Time', 'Crime_Code', 'Location', 'Description', 'Inside/Outside', 'Weapon', 'Post', 'District', 'Neighborhood', 'Longitude', 'Latitude', 'Location1', 'Premise', 'Total_Incidents',]},
	}
);


//Export model
module.exports = mongoose.model('Preference', PreferenceSchema);