var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
	{
	username: {type: String, required: true, max: 25},
	password: {type: String, required: true, max: 25},
	register_date: {type: Date},
	last_login_date: {type: Date},
	}
);


//Export model
module.exports = mongoose.model('User', UserSchema);