var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
	{
	Username: {type: String, required: true, max: 25},
	Password: {type: String, required: true, max: 25},
	Register_Date: {type: Date},
	Last_Login_Date: {type: Date},
	}
);


//Export model
module.exports = mongoose.model('User', UserSchema);