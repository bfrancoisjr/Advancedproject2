const mongoose = require('mongoose'),
Schema = mongoose.Schema;

let UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	isOver21: {
		type: String,
		required: true
	}
})


module.exports = mongoose.model('User', UserSchema);