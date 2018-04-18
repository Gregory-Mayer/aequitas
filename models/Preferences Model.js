var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PreferenceSchema = new Schema(
	{
	username: {type: String, required: true, max: 25},
	favorite_view: {type: String, enum: ['all', 'map', 'graph', 'table',]},
	favorite_date_range_start: {type: Date},
	favorite_date_range_end: {type: Date},
	favorite_time_range_start: {type: Date},
	favorite_time_range_end: {type: Date},
	favorite_map_type: {type: String, enum: ['heat', 'pin',]},
	favorite_chart_type: {type: String, enum: ['bar', 'pie', 'line',]},
	favorite_filter: {type: String, enum: ['crimedate', 'crimetime', 'crimecode', 'location', 'description', 'inside_outside', 'weapon', 'post', 'district', 'neighborhood', 'longitude', 'latitude', 'location_1', 'premise', 'total_incidents',]},
	}
);


//Export model
module.exports = mongoose.model('Preference', PreferenceSchema);